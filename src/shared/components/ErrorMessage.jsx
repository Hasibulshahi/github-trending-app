export default function ErrorMessage({ message }) {
  return (
    <div style={{ color: 'red', textAlign: 'center', padding: '1rem' }}>
      {message}
    </div>
  );
}
