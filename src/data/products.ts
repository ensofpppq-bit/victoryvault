export type ProductTag = 'Premium' | 'Soldé'

export interface Product {
  id: string
  title: string
  price: string
  buyUrl: string
  tag: ProductTag
  image: string
  gallery: string[]
  features: string[]
}

export const DISCORD_URL = 'https://discord.gg/bqxDsw7VV2'

export const HERO_IMAGE =
  'https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/main/ChatGPT%20Image%2031%20mai%202026%2C%2022_17_46.png'

export const products: Product[] = [
  {
    id: 'premium',
    title: 'Compte Fortnite Premium',
    price: '50,00 €',
    buyUrl: 'https://payhip.com/b/UqdAF',
    tag: 'Premium',
    image:
      'https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/main/ChatGPT%20Image%2031%20mai%202026%2C%2021_31_38.png',
    gallery: [
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663285568180316/ima1ge.png?ex=6a1da252&is=6a1c50d2&hm=fc099057e8738a5176e8dc066742b8c82571463a9cb585c1d45473e7e3c63266&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663283906969681/fd.png?ex=6a1da251&is=6a1c50d1&hm=9032fa90af13cab76b692582aaa14c23fca7868b92c89f95f188787c01cab01f&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663284259426384/fdf.png?ex=6a1da251&is=6a1c50d1&hm=a7ce210a59ea7c49fa2dc294d7063c1c53edc2888469abae4a19ba71950c2ec6&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663284796293190/gg.png?ex=6a1da251&is=6a1c50d1&hm=7cb831ebf37d64ff6542c32e0fe7d850a3974646ad458ac3a13e3f34b44c6f71&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663285081374782/i.png?ex=6a1da251&is=6a1c50d1&hm=302b45d27f0e70eff1535d93a33f758a516837689a2e088df3b23abe3296dd5f&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663286209777835/image.png?ex=6a1da252&is=6a1c50d2&hm=3f2605c83ee95223781adfb037ef03985903701efa97e01bca1c36c6b6904ed2&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663286595518504/l.png?ex=6a1da252&is=6a1c50d2&hm=b3fa1fad37ba5ef3a8a99b727ae89d71e2ab599e2cfa4ff4317863558ac240eb&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663287178661909/lk.png?ex=6a1da252&is=6a1c50d2&hm=97041f4100ab07eff8b45d3639e9dcde0a2db3eca0b33e3ec24d48e40f4e3927&',
      'https://cdn.discordapp.com/attachments/1510282054497992784/1510663287581179914/qs.png?ex=6a1da252&is=6a1c50d2&hm=b93e31963831f5fc3c53a2bfc29eddc33fdf44e8f41df19531b19612d16694d3&',
    ],
    features: [
      'Compte Fortnite premium',
      'Accès immédiat après achat',
      'Compte vérifié manuellement',
      'Livraison rapide garantie',
    ],
  },
  {
    id: 'normal-1',
    title: 'Compte Fortnite Normal',
    price: '10 €',
    buyUrl: 'https://payhip.com/b/tJ9F1',
    tag: 'Soldé',
    image:
      'https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/refs/heads/main/ChatGPT%20Image%2031%20mai%202026%2C%2022_50_16.png',
    gallery: [
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704501596618803/skin.png?ex=6a1dc8b4&is=6a1c7734&hm=692131ca5fb16b8ee59e0d7f128bae1008e6646cdb1881f9b54b4d2f92d3c16b&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704502024568922/skin2.png?ex=6a1dc8b4&is=6a1c7734&hm=a7a11f146b63d75954b43dcbe0907db7e842ce22e1eb26ecc20651f58a3dd096&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704498178392115/emote2.png?ex=6a1dc8b3&is=6a1c7733&hm=92c4157e7f5129efc1b77c2409a89a7cb8d672668715ede7eba984f5e11d6c90&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704498765598740/pioche3.png?ex=6a1dc8b4&is=6a1c7734&hm=a7a26861c094dbfc2a7cc9db34f4af3fbe04386e8d3014a29847eaca443b6a48&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704499163922545/pioche4.png?ex=6a1dc8b4&is=6a1c7734&hm=b5736a705f8108a4aa03f3dfd95dec328c6dd5d2d927e4868c12fd22d50bc054&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704499705118941/pioche5.png?ex=6a1dc8b4&is=6a1c7734&hm=993733b9d136004833eba6537a75b6ad63a9114aebf03b9840cc47e29e574857&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704500170690560/sac1.png?ex=6a1dc8b4&is=6a1c7734&hm=798aa2b4d1f0f70b1f839200cebeaaf530ef79e4e586ff9a1150f67790b44757&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704500556431593/sac2.png?ex=6a1dc8b4&is=6a1c7734&hm=f49bc77d2375af227a2a6863867e28bf483a40cde9bc8fb7d0123ef727199d2a&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704501143765042/sac3.png?ex=6a1dc8b4&is=6a1c7734&hm=7928003481682b08eec6e28a6ec9cd02d4aff830312bc07df2c04aaba58aada7&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510704502464974988/emote1.png?ex=6a1dc8b4&is=6a1c7734&hm=b5e185b9f091762696701e23a7b489c0bd1b88f68c9725946a5e5d0e0cd2b9b5&',
    ],
    features: [
      'Compte Fortnite Normal',
      'Accès immédiat après achat',
      'Compte vérifié manuellement',
      'Livraison rapide garantie',
    ],
  },
  {
    id: 'normal-2',
    title: 'Compte Fortnite Normal',
    price: '10 €',
    buyUrl: 'https://payhip.com/b/m7kF2',
    tag: 'Soldé',
    image:
      'https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/refs/heads/main/ChatGPT%20Image%2031%20mai%202026%2C%2023_20_49.png',
    gallery: [
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705928268415096/sac2.png?ex=6a1dca08&is=6a1c7888&hm=8adba1ca8f3a9364b1c074764e1d052044f9dcf0bcaf089c17b5ec2692c26eea&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705928591245352/sac3.png?ex=6a1dca08&is=6a1c7888&hm=80b37c09c34e6cceb005ab57ce1426eac6d5df8cb8f27c39dcb0ab2ad25ca3f5&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705928918269982/sac4.png?ex=6a1dca09&is=6a1c7889&hm=ca5b4d18cf8a8d476e5413d6a3812894756bc8b9b213985b980714d8f2dec8be&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705929191034981/sac5.png?ex=6a1dca09&is=6a1c7889&hm=24527605fc072e5c342ae0d86749773ebdf5af16aae3c441c14574c839b835ea&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705929560264774/skin1.png?ex=6a1dca09&is=6a1c7889&hm=b064091978522105cbd30b1e2e7938406ffa1abcd6b80c73078bbee766c6da25&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705929887416411/skin2.png?ex=6a1dca09&is=6a1c7889&hm=384c5c41b77a2dabc3e06d45ce877dfa63ef0b1ff0a0c5689cbd9a96a60cc5ea&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705930252062824/voiture.png?ex=6a1dca09&is=6a1c7889&hm=0dbe955e09cd7026047a78e2745af8978d4c1c74a0b40a148ad8c617ad53fab4&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705930671751361/planeur1.png?ex=6a1dca09&is=6a1c7889&hm=f6526ad2e1e5d65a42ebe69e99f03583fe88f6d666d2329334ce9635065f7676&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705931099439285/planeur3.png?ex=6a1dca09&is=6a1c7889&hm=79f2c46a4df66cde2baaebcc603cdf812aff6106b4470bdeb78dacead3ee3938&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705931506155520/sac1.png?ex=6a1dca09&is=6a1c7889&hm=bcb8e2fb06834f05f0c7bd3205c2f4d0629c38ceaaff278488df8358848e6948&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705908517306479/pioche1.png?ex=6a1dca04&is=6a1c7884&hm=75373bfef00a763a42ee888b1536ea49e345d7a1b8f0a3841ab886ac8aab1b02&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705908878020651/pioche2.png?ex=6a1dca04&is=6a1c7884&hm=06c3d6fc11cf9c1f07158a7edc85a3abf490bdad83022d021035f087454bdcf9&',
      'https://cdn.discordapp.com/attachments/1510282053579571200/1510705909238857950/pioche3.png?ex=6a1dca04&is=6a1c7884&hm=b88477c2cee1473332814e80df9631b790cda4495449cc402c93fa3f5a9528b4&',
    ],
    features: [
      'Compte Fortnite Normal',
      'Accès immédiat après achat',
      'Compte vérifié manuellement',
      'Livraison rapide garantie',
    ],
  },
  {
    id: 'petit',
    title: 'Compte Fortnite Petit',
    price: '5 €',
    buyUrl: 'https://payhip.com/b/4dBrj',
    tag: 'Soldé',
    image:
      'https://raw.githubusercontent.com/ensofpppq-bit/victoryvault/refs/heads/main/ChatGPT%20Image%2031%20mai%202026%2C%2023_31_20.png',
    gallery: [
      'https://cdn.discordapp.com/attachments/1510282055718801568/1510705099217834115/emote.png?ex=6a1dc943&is=6a1c77c3&hm=704ffecc5fd35edb71443f2d9f2f92ead9183a03de8736acb91ff74e247d7bb8&',
      'https://cdn.discordapp.com/attachments/1510282055718801568/1510705099868082296/pioche.png?ex=6a1dc943&is=6a1c77c3&hm=15a50d4c0bff87f566e738c955dc98a22a59ed4f86e2b82e6c099d4261a7f8c6&',
      'https://cdn.discordapp.com/attachments/1510282055718801568/1510705100488835192/planneur.png?ex=6a1dc943&is=6a1c77c3&hm=6e71b2b77b2c75fb6b600d3a1cef6308d26f0d6d71c57b60bccb4ad3ce66e842&',
      'https://cdn.discordapp.com/attachments/1510282055718801568/1510705100966854767/sac.png?ex=6a1dc943&is=6a1c77c3&hm=074967dc2ee06ffb839663cbc2c04865b7ee9aef09d80f84a05c5edd09fea7d6&',
      'https://cdn.discordapp.com/attachments/1510282055718801568/1510705101441077258/skin.png?ex=6a1dc943&is=6a1c77c3&hm=87bcbd259b54a6a600691995e8dad1dba8dc45ebc363617741475597092c4e07&',
    ],
    features: [
      'Compte Fortnite Petit',
      'Accès immédiat après achat',
      'Compte vérifié manuellement',
      'Livraison rapide garantie',
    ],
  },
]
