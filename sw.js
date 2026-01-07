const CACHE_NAME = 'izeh-discounts-v1';
const ASSETS = [
  'index.html',
  'config.json',
  'manifest.json'
];

// نصب سرویس ورکر و ذخیره فایل‌های پایه
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// مدیریت درخواست‌ها (لود از شبکه، پشتیبان از کش)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
