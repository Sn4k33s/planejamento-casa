import { put, head } from '@vercel/blob';

export default async function handler(req, res) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Responder OPTIONS para CORS
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const BLOB_FILENAME = 'house-data.json';

  try {
    if (req.method === 'GET') {
      // Buscar dados salvos
      try {
        const blobUrl = `https://${process.env.BLOB_READ_WRITE_TOKEN?.split('_')[1]}.public.blob.vercel-storage.com/${BLOB_FILENAME}`;
        
        const response = await fetch(blobUrl);
        
        if (response.ok) {
          const data = await response.json();
          return res.status(200).json(data);
        } else {
          // Se não existir, retornar vazio
          return res.status(200).json({ rooms: [] });
        }
      } catch (error) {
        // Se der erro ao buscar, retornar vazio
        return res.status(200).json({ rooms: [] });
      }
      
    } else if (req.method === 'POST') {
      // Salvar dados
      const body = req.body;
      
      // Converter para JSON string
      const jsonData = JSON.stringify(body);
      
      // Salvar no Blob
      const blob = await put(BLOB_FILENAME, jsonData, {
        access: 'public',
        contentType: 'application/json',
      });
      
      return res.status(200).json({ 
        success: true, 
        message: 'Dados salvos com sucesso!',
        url: blob.url
      });
      
    } else {
      return res.status(405).json({ error: 'Método não permitido' });
    }
    
  } catch (error) {
    console.error('Erro na API:', error);
    return res.status(500).json({ 
      error: 'Erro no servidor', 
      details: error.message 
    });
  }
}
