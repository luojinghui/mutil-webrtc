const API_PORT = '3001';

// const API_ROOT = `http://localhost:${API_PORT}/webrtc`;
// const API_ROOT = `https://localhost:${API_PORT}`;
const API_ROOT = `http://www.luojh.com/`;

const DEFAULT_ICE_SERVER = {
  url: 'turn:47.52.156.68:3478',
  credential: 'zmecust',
  username: 'zmecust',
};

module.exports = { API_PORT, API_ROOT, DEFAULT_ICE_SERVER };
