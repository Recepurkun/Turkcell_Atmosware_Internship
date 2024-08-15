// import Counter from "./index";
// // import "../../App.css";
// // import "../../index.css";

// describe("Counter Componenti", () => {
//   beforeEach(() => {
//     cy.mount(<Counter />);
//   });

//   it("renderdan sonra gelen ilk deger 0 mi?", () => {
//     cy.get('[data-test-id="counter"]').should("contain.text", 0);
//     // cy.get('[data-test-id="counter"]').should("contain.text", 1); //* hata veriyor
//     // cy.get('[data-test-id="counter"]').should("have.text", 0); //* bosluk bile önemli
//   });

//   it("azalt butonu count degeri 0 iken disabled mi?", () => {
//     cy.get('[data-test-id="counter"]').should("have.text", 0);
//     cy.get("button").eq(0).should("be.disabled");
//   });

//   it("arttir butonuna basinca islevini yerine getiriyor mu?", () => {
//     cy.get("button").eq(1).click();
//     cy.get("button").eq(1).click();
//     cy.get('[data-test-id="counter"]').should("have.text", 2);
//   });

//   it("azalt butonu coutn degeri 0 degilken aktif hale geliyor mu?", () => {
//     cy.get('[data-test-id="counter"]').should("have.text", 0);
//     cy.get("button").eq(0).should("be.disabled");
//     cy.get("button").eq(1).click();
//     cy.get("button").eq(0).should("not.be.disabled");
//   });

//   it("baslangic degeri belirlendiginde dogru sekilde render oluyor mu?", () => {
//     cy.mount(<Counter initialValue={10} />);
//     cy.get('[data-test-id="counter"]').should("have.text", 10);
//     cy.mount(<Counter initialValue={-1} />);
//     cy.get('[data-test-id="counter"]').should("have.text", 0);
//   });
// });

import { Provider } from "react-redux";
import Counter from "./index";
import store from "../../stores";
import { setCount } from "../../stores/app/actions";

describe("Counter Componenti", () => {
  beforeEach(() => {
    setCount(0);
    cy.mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  });

  it("renderdan sonra gelen ilk deger 0 mi?", () => {
    cy.get('[data-test-id="counter"]').should("contain.text", 0);
  });

  it("azalt butonu count degeri 0 iken disabled mi?", () => {
    cy.get('[data-test-id="counter"]').should("have.text", 0);
    cy.get("button").eq(0).should("be.disabled");
  });

  it("arttir butonuna basinca islevini yerine getiriyor mu?", () => {
    cy.get("button").eq(1).click();
    cy.get("button").eq(1).click();
    cy.get('[data-test-id="counter"]').should("have.text", 2);
  });

  it("azalt butonu coutn degeri 0 degilken aktif hale geliyor mu?", () => {
    cy.get('[data-test-id="counter"]').should("have.text", 0);
    cy.get("button").eq(0).should("be.disabled");
    cy.get("button").eq(1).click();
    cy.get("button").eq(0).should("not.be.disabled");
  });

  it("baslangic degeri belirlendiginde dogru sekilde render oluyor mu?", () => {
    setCount(10);
    cy.get('[data-test-id="counter"]').should("have.text", 10);
  });
  it("baslangic degeri 0dan kucuk belirleniyorsa dogru calisiyor mu?", () => {
    setCount(-1);
    cy.get('[data-test-id="counter"]').should("have.text", 0);
  });
});
