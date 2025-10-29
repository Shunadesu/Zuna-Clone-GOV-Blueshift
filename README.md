# Blueshift Governance Dashboard

Dashboard cho SIMD-0326: Alpenglow - Nền tảng quản trị phi tập trung trên Solana.

## Tính năng

- ✅ Hiển thị trạng thái vote (Status, Quorum, Supermajority)
- ✅ Biểu đồ phân phối vote với animation khi hover
- ✅ Biểu đồ phân phối token (Claimed, Voted, Unclaimed)
- ✅ Responsive design
- ✅ Dark theme với hiệu ứng glass morphism
- ✅ Typography monospace cho phong cách technical

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build cho production
npm run build

# Export static files cho Vercel
npm run build
```

## Deploy lên Vercel

1. Push code lên GitHub repository
2. Import repository vào Vercel
3. Vercel sẽ tự động detect Next.js và deploy

Hoặc sử dụng Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Cấu trúc dự án

```
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Header với logo và Connect Wallet
│   │   ├── StatusCards.tsx     # 4 cards hiển thị trạng thái
│   │   ├── VoteChart.tsx       # Biểu đồ tròn vote distribution
│   │   └── TokenChart.tsx      # Biểu đồ cột token distribution
│   ├── globals.css             # Global styles và animations
│   ├── layout.tsx              # Root layout với footer
│   └── page.tsx                # Main page
├── public/
│   └── logo.svg                # Logo Blueshift
├── next.config.js              # Next.js config
├── tailwind.config.ts          # Tailwind CSS config
└── package.json
```

## Công nghệ

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **CSS Animations** - Vote chart hover effects

## License

MIT
