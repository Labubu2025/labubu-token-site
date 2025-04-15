import Head from "next/head";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#0b032d", color: "white", fontFamily: "sans-serif" }}>
      <Head>
        <title>LABUBU – To The Moon 🚀</title>
      </Head>

      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <img src="/LABUBU_logo_final_transparent_512x512.png" alt="LABUBU" width="150" />
        <h1 style={{ fontSize: "3rem", marginTop: "1rem" }}>LABUBU</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>To The Moon 🚀</p>
        <a
          href="https://jup.ag/swap?input=SOL&output=2ygXYFRC82ZjoEEWt5rfEHPVfEdKxWb747GjQSHgVzxi"
          target="_blank"
          style={{
            backgroundColor: "#ff4081",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Buy on Jupiter
        </a>
      </section>

      <section style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2>LABUBU is a Solana-powered meme revolution</h2>
        <p>
          Created for the community, with 1B total supply, zero minting, 100% decentralized.
          Join the movement, grab your tokens, and help take LABUBU to the moon! 🌕
        </p>
      </section>

      <section style={{ textAlign: "center", padding: "40px 20px", backgroundColor: "#1a103d" }}>
        <h2>Roadmap 2025</h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "1.2rem" }}>
          <li>✅ Q2: Token launch, liquidity, airdrop</li>
          <li>🌱 Q3: Influencers, NFTs, memes</li>
          <li>🌍 Q4: CEX listings, staking, charity</li>
        </ul>
      </section>

      <footer style={{ textAlign: "center", padding: "20px", fontSize: "0.9rem" }}>
        <p>🐇 LABUBU | Telegram: @labubuworldofficial | Twitter: @labubu_token</p>
      </footer>
    </div>
  );
}
