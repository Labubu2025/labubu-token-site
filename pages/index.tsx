import { Button } from "@/components/ui/button";
import { Twitter, Telegram } from "lucide-react";

export default function LabubuHomepage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage: "url('/LABUBU_hero.png')",
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-5xl font-bold mb-4 text-center">LABUBU</h1>
        <p className="text-xl mb-6 text-center">
          To The Moon – The Cutest Meme Coin on Solana! 🐇🚀
        </p>
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <a
            href="https://jup.ag/swap?input=SOL&output=2ygXYFRC82ZjoEEWt5rfEHPVfEdKxWb747GjQSHgVzxi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-lg px-6 py-4">🚀 Buy on Jupiter</Button>
          </a>
          <a
            href="https://twitter.com/labubu_token"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-8 h-8" />
          </a>
          <a
            href="https://t.me/labubuworldofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram className="w-8 h-8" />
          </a>
        </div>
        <p className="text-sm text-center">
          1 Billion Supply • No Mint Authority • 100% Community
        </p>
      </div>
    </div>
  );
}
