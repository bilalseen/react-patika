import PropTypes from "prop-types";

const User = ({
  name = "İsimsiz",
  surname,
  isLoggedIn,
  age,
  friends,
  address,
}) => {
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>{`${name} ${surname} (${age})`}</h1>
          {friends.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </>
      ) : (
        <h1>Giriş Yapılmadı</h1>
      )}
    </div>
  );
};

User.protoTypes = {
  name: PropTypes.string.isRequired,
  surnmae: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  friends: PropTypes.array.isRequired,
  address: PropTypes.shape({
    title: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
  }),
};

export default User;
