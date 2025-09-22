export default function Home() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #d6ceddff 0%, #1858d9ff 100%)",
      color: "white",
      textAlign: "center",
      fontFamily: "'Arial', sans-serif",
    },
    title: {
      fontSize: "3rem",
      margin: 0,
      textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
    },
    subtitle: {
      fontSize: "1.2rem",
      marginTop: "10px",
      opacity: 0.85,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome Home</h1>
    </div>
  );
}