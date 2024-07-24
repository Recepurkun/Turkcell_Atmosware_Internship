const UserDisplay = ({ user }) => {
  if (!user) return null; // kullanıcı yoksa hiçbir şey gösterme

  //kullanıcı varsa bilgilerini göster.
  return (
    <div>
      <h3>UserName: {user.name}</h3>
      <h4>UserMail: {user.email}</h4>
    </div>
  );
};

export default UserDisplay;
