const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');
require('dotenv').config({ path: '../config.env' });

// Criar pasta database se não existir
const dbDir = path.join(__dirname);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const dbPath = path.join(__dirname, 'ultra_vision.db');
const db = new sqlite3.Database(dbPath);

console.log('🗄️ Inicializando banco de dados Ultra Vision...');

// Criar tabelas
db.serialize(() => {
  // Tabela de usuários
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    avatar_url VARCHAR(255),
    is_premium BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de filmes
  db.run(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INTEGER,
    duration INTEGER,
    genre VARCHAR(100),
    director VARCHAR(100),
    cast TEXT,
    poster_url VARCHAR(255),
    trailer_url VARCHAR(255),
    rating DECIMAL(3,1) DEFAULT 0.0,
    views INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de séries
  db.run(`CREATE TABLE IF NOT EXISTS series (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    release_year INTEGER,
    genre VARCHAR(100),
    creator VARCHAR(100),
    cast TEXT,
    poster_url VARCHAR(255),
    trailer_url VARCHAR(255),
    rating DECIMAL(3,1) DEFAULT 0.0,
    views INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT 0,
    total_seasons INTEGER DEFAULT 1,
    total_episodes INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  // Tabela de episódios
  db.run(`CREATE TABLE IF NOT EXISTS episodes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    series_id INTEGER,
    season_number INTEGER,
    episode_number INTEGER,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration INTEGER,
    video_url VARCHAR(255),
    thumbnail_url VARCHAR(255),
    views INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (series_id) REFERENCES series (id) ON DELETE CASCADE
  )`);

  // Tabela de favoritos
  db.run(`CREATE TABLE IF NOT EXISTS favorites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    content_type VARCHAR(20) NOT NULL, -- 'movie' ou 'series'
    content_id INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  )`);

  // Tabela de histórico de visualização
  db.run(`CREATE TABLE IF NOT EXISTS watch_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    content_type VARCHAR(20) NOT NULL, -- 'movie' ou 'series'
    content_id INTEGER NOT NULL,
    progress INTEGER DEFAULT 0, -- progresso em segundos
    watched_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  )`);

  // Tabela de avaliações
  db.run(`CREATE TABLE IF NOT EXISTS ratings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    content_type VARCHAR(20) NOT NULL, -- 'movie' ou 'series'
    content_id INTEGER NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
  )`);

  console.log('✅ Tabelas criadas com sucesso!');

  // Inserir dados de exemplo
  insertSampleData();
});

function insertSampleData() {
  console.log('📝 Inserindo dados de exemplo...');

  // Inserir filmes de exemplo
  const sampleMovies = [
    {
      title: 'Fear Street Part One: 1994',
      description: 'Depois de uma série de assassinatos brutais, um grupo de adolescentes enfrenta uma força maligna que aterroriza a cidade há séculos.',
      release_year: 2021,
      duration: 107,
      genre: 'Terror',
      director: 'Leigh Janiak',
      cast: 'Kiana Madeira, Olivia Scott Welch, Benjamin Flores Jr.',
      poster_url: '/src/img/filme1.jpg',
      rating: 6.8,
      is_featured: 1
    },
    {
      title: 'The Conjuring: The Devil Made Me Do It',
      description: 'Um caso real de assassinato que envolve possessão demoníaca e o primeiro uso da defesa de possessão demoníaca em um tribunal dos EUA.',
      release_year: 2021,
      duration: 112,
      genre: 'Terror',
      director: 'Michael Chaves',
      cast: 'Patrick Wilson, Vera Farmiga, Ruairi O\'Connor',
      poster_url: '/src/img/filme2.jpg',
      rating: 6.3
    },
    {
      title: 'A Quiet Place Part II',
      description: 'Após os eventos mortais em casa, a família Abbott agora deve enfrentar os terrores do mundo exterior enquanto continuam lutando pela sobrevivência em silêncio.',
      release_year: 2021,
      duration: 97,
      genre: 'Terror',
      director: 'John Krasinski',
      cast: 'Emily Blunt, Cillian Murphy, Millicent Simmonds',
      poster_url: '/src/img/filme3.jpeg',
      rating: 7.2
    },
    {
      title: 'The Invisible Man',
      description: 'Quando o ex-namorado de Cecilia se suicida e deixa sua fortuna para ela, suspeitas começam a surgir sobre sua morte.',
      release_year: 2020,
      duration: 124,
      genre: 'Terror',
      director: 'Leigh Whannell',
      cast: 'Elisabeth Moss, Oliver Jackson-Cohen, Aldis Hodge',
      poster_url: '/src/img/filme4.jpeg',
      rating: 7.1
    },
    {
      title: 'Midsommar',
      description: 'Um casal viaja para a Suécia para visitar o festival rural de midsommar da comunidade de Hårga, mas o que começa como um retiro idílico se transforma em um pesadelo.',
      release_year: 2019,
      duration: 147,
      genre: 'Terror',
      director: 'Ari Aster',
      cast: 'Florence Pugh, Jack Reynor, William Jackson Harper',
      poster_url: '/src/img/filme5.jpg',
      rating: 7.1
    },
    {
      title: 'Hereditary',
      description: 'Uma família é atormentada após a morte de sua avó reclusa e matriarca, mas mesmo após ela partir, ela continua a atormentar a família com manifestações cada vez mais terríveis.',
      release_year: 2018,
      duration: 127,
      genre: 'Terror',
      director: 'Ari Aster',
      cast: 'Toni Collette, Alex Wolff, Milly Shapiro',
      poster_url: '/src/img/filme6.jpeg',
      rating: 7.3
    }
  ];

  const insertMovie = db.prepare(`
    INSERT OR IGNORE INTO movies (title, description, release_year, duration, genre, director, cast, poster_url, rating, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sampleMovies.forEach(movie => {
    insertMovie.run(
      movie.title,
      movie.description,
      movie.release_year,
      movie.duration,
      movie.genre,
      movie.director,
      movie.cast,
      movie.poster_url,
      movie.rating,
      movie.is_featured
    );
  });

  // Inserir séries de exemplo
  const sampleSeries = [
    {
      title: 'Stranger Things',
      description: 'Quando um garoto desaparece, sua mãe, um chefe de polícia e seus amigos devem enfrentar forças aterrorizantes para salvá-lo.',
      release_year: 2016,
      genre: 'Drama, Fantasia, Terror',
      creator: 'The Duffer Brothers',
      cast: 'Millie Bobby Brown, Finn Wolfhard, Noah Schnapp',
      poster_url: '/src/img/serie1.jpeg',
      rating: 8.7,
      total_seasons: 4,
      total_episodes: 34,
      is_featured: 1
    }
  ];

  const insertSeries = db.prepare(`
    INSERT OR IGNORE INTO series (title, description, release_year, genre, creator, cast, poster_url, rating, total_seasons, total_episodes, is_featured)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  sampleSeries.forEach(series => {
    insertSeries.run(
      series.title,
      series.description,
      series.release_year,
      series.genre,
      series.creator,
      series.cast,
      series.poster_url,
      series.rating,
      series.total_seasons,
      series.total_episodes,
      series.is_featured
    );
  });

  // Inserir usuário de exemplo
  const bcrypt = require('bcryptjs');
  const hashedPassword = bcrypt.hashSync('123456', 10);
  
  db.run(`
    INSERT OR IGNORE INTO users (username, email, password, full_name, is_premium)
    VALUES (?, ?, ?, ?, ?)
  `, ['admin', 'admin@ultravision.com', hashedPassword, 'Administrador', 1]);

  insertMovie.finalize();
  insertSeries.finalize();

  console.log('✅ Dados de exemplo inseridos com sucesso!');
  console.log('🎬 Filmes inseridos:', sampleMovies.length);
  console.log('📺 Séries inseridas:', sampleSeries.length);
  console.log('👤 Usuário admin criado: admin@ultravision.com / 123456');
}

db.close((err) => {
  if (err) {
    console.error('❌ Erro ao fechar banco de dados:', err.message);
  } else {
    console.log('✅ Banco de dados inicializado com sucesso!');
    console.log('📁 Arquivo do banco:', dbPath);
  }
}); 