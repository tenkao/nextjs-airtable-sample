module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // ビルド時にチェックしない
    dirs: ['src/pages/', 'src/components/', 'src/lib/'], // 特定のディレクトリのみ対象にする
  }
}
