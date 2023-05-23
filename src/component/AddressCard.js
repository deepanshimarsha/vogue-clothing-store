export default function AddressCard(data) {
  const { id, name, address, city, state, country, postal_code, phone_no } =
    data;
  return (
    <div className="address-description">
      <h3>{name}</h3>
      <p>
        {address}, {city}, {state},{country}
      </p>
      <p>{postal_code}</p>
      <p>+{phone_no}</p>
    </div>
  );
}
