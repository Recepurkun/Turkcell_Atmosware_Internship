//kullanacağımız statelerin ilk durum(başlangıç durumu) atamalarını yapıyoruz.
const initalState = {
    loading: false,
    user: null,
    error: null
}

//reducerimizi oluşturup ilk değer atamalarını veriyoruz ve actionlarimizi alıyoruz.
const userReducer = (state = initalState, action) => {
    //burada gelen action typelara göre statelerin durumları nasıl değişeceğini belirliyoruz.
    switch (action.type) {
        case "USER_FETCH_REQUESTED":
            return { ...state, loading: true, error: null } // Veri çekme isteği başladığında çalışacak
        case "USER_FETCH_SUCCEEDED":
            return { ...state, loading: false, user: action.user } // Veri çekme başarılı olduğunda çalışacak
        case "USER_FETCH_FAILED":
            return { ...state, loading: false, error: action.message } // Veri çekme başarısız olduğunda çalışacak

        default:
            return state;
    }
}

export default userReducer
