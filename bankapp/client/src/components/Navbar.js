const Navbar = () => {
    return (
      <div
        style={{
          background: 'linear-gradient(90deg, #FFD700, #FFB300)',
          padding: '15px 30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          color: '#333',
          fontSize: '22px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="bank" style={{ marginRight: '10px' }}>
            🏦
          </span>
          Bank_500
        </div>
  
        <div style={{ fontSize: '16px', fontWeight: 'normal' }}>
          Welcome, Guest!
        </div>
      </div>
    );
  };
  
  export default Navbar;
  