import "../styles/generalInfo.css";

export function GeneralInfo({ generalInfo, handleNameChange }) {
  const { name, email, phone, description } = generalInfo;
  return (
    <form className="generalInfo-form">
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder={name}
        onChange={handleNameChange}
      />
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder={email}
        onChange={handleNameChange}
      />
      <label htmlFor="phone">Phone Number: </label>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder={phone}
        onChange={handleNameChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder={description}
        onChange={handleNameChange}
      ></textarea>
    </form>
  );
}
