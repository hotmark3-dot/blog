export default function AdminPage() {
  return (
    <iframe
      src="http://localhost:4001"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        border: 'none',
        zIndex: 9999,
      }}
      title="TinaCMS Admin"
      allow="geolocation; microphone; camera; payment"
    />
  )
}
