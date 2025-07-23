const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
require('dotenv').config({ path: './config.env' });

// Importar rotas
const authRoutes = require('./routes/auth');
const moviesRoutes = require('./routes/movies');
const seriesRoutes = require('./routes/series');
const userRoutes = require('./routes/users');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware de segurança
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) * 60 * 1000, // 15 minutos
  max: parseInt(process.env.RATE_LIMIT_MAX), // limite de 100 requests por IP
  message: {
    error: 'Muitas requisições. Tente novamente em alguns minutos.'
  }
});
app.use(limiter);

// CORS
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:5500', 'http://localhost:5500'],
  credentials: true
}));

// Middleware para parsing JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, './')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rotas da API
app.use('/api/auth', authRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/series', seriesRoutes);
app.use('/api/users', userRoutes);

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota de health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Ultra Vision API está funcionando!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Erro interno do servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo deu errado'
  });
});

// Rota 404
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    message: 'A rota solicitada não existe'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Ultra Vision rodando na porta ${PORT}`);
  console.log(`📱 Ambiente: ${process.env.NODE_ENV}`);
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`📊 Health Check: http://localhost:${PORT}/api/health`);
}); 