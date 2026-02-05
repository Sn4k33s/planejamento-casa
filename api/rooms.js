// Armazenamento temporário em memória (será perdido ao reiniciar)
let dataStore = { rooms: [] };

export default function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(dataStore);
  }

  if (req.method === 'POST') {
    dataStore = req.body;
    return res.status(200).json({ success: true, message: 'Salvo!' });
  }

  return res.status(405).json({ error: 'Método não permitido' });
}
