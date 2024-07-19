

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511958409968"
      style={{
        position: 'fixed',
        width: '60px',
        height: '60px',
        bottom: '40px',
        right: '40px',
        backgroundColor: '#25d366',
        color: '#FFF',
        borderRadius: '50px',
        textAlign: 'center',
        fontSize: '30px',
        boxShadow: '1px 1px 2px #888',
        zIndex: '1000'
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i style={{ marginTop: '16px' }} className="fa fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
