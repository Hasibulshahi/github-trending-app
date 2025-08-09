// export default function LoadingSpinner() {
//     return <p style={{ textAlign: "center" }}>Loading...</p>;
//   }

export default function LoadingSpinner() {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '120px', // enough space to center in a section
  },
  spinner: {
    border: '4px solid #f3f3f3', // Light gray
    borderTop: '4px solid #0366d6', // Blue top
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    animation: 'spin 1s linear infinite',
  },
};
