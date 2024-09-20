module.exports = {
    branches: ['main'],
    plugins: [
      '@semantic-release/commit-analyzer', // Analiza los mensajes de commit para determinar el siguiente versionado
      '@semantic-release/release-notes-generator', // Genera las notas de la release basándose en los commits
      '@semantic-release/changelog', // Actualiza el archivo CHANGELOG.md
      '@semantic-release/npm', // Publica el paquete en npm
      '@semantic-release/github', // Crea una release en GitHub
      [
        '@semantic-release/git', // Commit del nuevo `package.json` y el changelog después del release
        {
          assets: ['package.json', 'CHANGELOG.md'],
          message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }
      ]
    ]
  };