import "../styles/generalInfo.css";

export function GeneralInfo({ generalInfo, handleNameChange }) {
  const { name, email, phone } = generalInfo;
  return (
    <form className="generalInfo-form">
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleNameChange}
      />
      <label htmlFor="phone">Phone Number: </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={phone}
        onChange={handleNameChange}
      />
    </form>
  );
}
