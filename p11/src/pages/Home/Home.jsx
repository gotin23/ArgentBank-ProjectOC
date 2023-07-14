import React from "react";
import "./Home.css";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import FeatureItem from "../../components/FeatureItem/FeatureItem";
import logofeatureChat from "../../assets/img/icon-chat.png";
import logofeatureMoney from "../../assets/img/icon-money.png";
import logofeatureSecurity from "../../assets/img/icon-security.png";
export default function Home() {
  return (
    <main>
      <HeroBanner />
      <section class="features">
        <h2 class="sr-only">Features</h2>
        <FeatureItem
          state={{
            title: "You are our #1 priority",
            description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
            logo: logofeatureChat,
          }}
        />
        <FeatureItem
          state={{
            title: "More savings means higher rates",
            description: "The more you save with us, the higher your interest rate will be!",
            logo: logofeatureMoney,
          }}
        />
        <FeatureItem
          state={{
            title: "Security you can trust",
            description: "We use top of the line encryption to make sure your data and money is always safe.",
            logo: logofeatureSecurity,
          }}
        />
      </section>
    </main>
  );
}
