import { CharacterData } from '../types'

export const charactersData: CharacterData[] = [
  {
    character: 'Ñ / ñ',
    languages: ['スペイン語'],
    description: 'スペイン語独占文字。地名や看板に1つでもあればスペイン確定。GeoGuessrでは最も信頼できる判別文字の一つ。'
  },
  {
    character: 'Ç / ç',
    languages: ['ポルトガル語', 'フランス語', 'トルコ語', 'アルバニア語'],
    description: 'セディーリャ付き C。「ス」に近い音。ã/õ と並ぶとポルトガル。ë＋ç が多いとアルバニア。'
  },
  {
    character: 'Ã / ã',
    languages: ['ポルトガル語'],
    description: 'ポルトガル語独占文字。地名や看板に1つでもあればポルトガル確定。õと組み合わせで見つけることが多い。'
  },
  {
    character: 'Õ / õ',
    languages: ['ポルトガル語', 'エストニア語'],
    description: '南欧にあればポルトガル、北欧・バルト海沿岸にあればエストニア。地理的位置で簡単に判別可能。'
  },
  {
    character: 'Â / â',
    languages: ['ポルトガル語', 'フランス語'],
    description: 'サーカムフレックス付き A。閉じた「ア」。'
  },
  {
    character: 'Ê / ê',
    languages: ['ポルトガル語', 'フランス語'],
    description: 'サーカムフレックス付き E。閉じた「エ」。'
  },
  {
    character: 'Ô / ô',
    languages: ['ポルトガル語', 'フランス語'],
    description: 'サーカムフレックス付き O。閉じた「オ」。'
  },
  {
    character: 'Æ / æ',
    languages: ['デンマーク語', 'ノルウェー語', 'アイスランド語'],
    description: '合字 ae。「ア」と「エ」の中間。デンマーク／ノルウェー特定に便利。'
  },
  {
    character: 'Ø / ø',
    languages: ['デンマーク語', 'ノルウェー語'],
    description: 'ストローク付き O。「オ」と「エ」の中間。Æ と並ぶと DK/NO。'
  },
  {
    character: 'Å / å',
    languages: ['デンマーク語', 'ノルウェー語', 'スウェーデン語'],
    description: 'リング付き A。「オー」に近い。Å だけ大量 → スウェーデンの可能性大。'
  },
  {
    character: 'Ä / ä',
    languages: ['スウェーデン語', 'フィンランド語', 'エストニア語', 'ドイツ語'],
    description: 'ウムラウト付き A。「ア」と「エ」の中間。'
  },
  {
    character: 'Ö / ö',
    languages: ['スウェーデン語', 'フィンランド語', 'エストニア語', 'ドイツ語'],
    description: 'ウムラウト付き O。唇を丸めた「エ」。'
  },
  {
    character: 'Ü / ü',
    languages: ['エストニア語', 'ドイツ語', 'トルコ語'],
    description: '丸唇の「イ」。北欧で Ü＋Õ＋Ä が並ぶとエストニア。'
  },
  {
    character: 'Ł / ł',
    languages: ['ポーランド語'],
    description: 'ポーランド語独占文字。地名や看板に1つでもあればポーランド確定。GeoGuessrで最も信頼できる判別文字の一つ。'
  },
  {
    character: 'Ő / ő',
    languages: ['ハンガリー語'],
    description: 'ハンガリー語独占文字。地名や看板に1つでもあればハンガリー確定。ダブルアキュート記号が特徴的。'
  },
  {
    character: 'Ű / ű',
    languages: ['ハンガリー語'],
    description: 'ハンガリー語独占文字。地名や看板に1つでもあればハンガリー確定。ダブルアキュート記号が特徴的。'
  },
  {
    character: 'Ș / ș',
    languages: ['ルーマニア語'],
    description: '下コンマ付き S。sh 音。Ț とセットでルーマニア圏。'
  },
  {
    character: 'Ț / ț',
    languages: ['ルーマニア語'],
    description: '下コンマ付き T。ts 音。Ș と並ぶとルーマニア圏。'
  },
  {
    character: 'Ă / ă',
    languages: ['ルーマニア語'],
    description: 'ヨーロッパのラテン文字圏でĂがあればルーマニア濃厚。Ș/Țと組み合わせで確度UP。※ベトナム語にもあるが声調記号や景観で区別可能。'
  },
  {
    character: 'Ы / ы',
    languages: ['ロシア語', 'キルギス語', 'カザフ語', 'モンゴル語'],
    description: '「ウィ」に近い母音。ウクライナ語には無いため、キリル文字圏で東欧以外（ロシア・中央アジア）を示す重要文字。'
  },
  {
    character: 'І / і（キリル文字）',
    languages: ['ウクライナ語'],
    description: '「イ」母音。キリル文字圏でロシア語に無い独占文字でウクライナ確定。※ラテン文字圏では通常のIと区別困難。'
  },
  {
    character: 'Ј / ј（キリル文字）',
    languages: ['セルビア語', '北マケドニア語'],
    description: '英語 y 音。キリル文字圏でセルビア／MK 確定の決め手。※ラテン文字圏では通常のJと区別困難。'
  },
  {
    character: 'Ө / ө（キリル文字）',
    languages: ['キルギス語', 'カザフ語', 'モンゴル語'],
    description: '円唇中舌母音。「オ」と「エ」の中間。キリル文字圏で中央アジア・モンゴル系を示す。※ギリシャ文字Θとは別字。'
  },
  {
    character: 'Ү / ү（キリル文字）',
    languages: ['モンゴル語', 'カザフ語'],
    description: '前舌の「ウ」。キリル文字圏でӨとセットで中央アジア・モンゴル系を示す。※ラテン文字Yとは別字。'
  },
  {
    character: 'Ą / ą',
    languages: ['リトアニア語'],
    description: 'リトアニア語独占文字。地名や看板に1つでもあればリトアニア確定。他のオゴネク文字（ę, ų）と組み合わせて現れる。'
  },
  {
    character: 'Ę / ę',
    languages: ['リトアニア語'],
    description: 'リトアニア語独占文字。地名や看板に1つでもあればリトアニア確定。他のオゴネク文字（ą, ų）と組み合わせて現れる。'
  },
  {
    character: 'Ū / ū',
    languages: ['リトアニア語', 'ラトビア語'],
    description: '長母音 U。ā と並ぶ→ラトビア、ė と並ぶ→リトアニア。'
  },
  {
    character: 'Ī / ī',
    languages: ['ラトビア語', 'リトアニア語'],
    description: '長母音 I。ā ū ī でラトビア。'
  },
  {
    character: 'Ė / ė',
    languages: ['リトアニア語'],
    description: 'リトアニア語独占文字。地名や看板に1つでもあればリトアニア確定。オゴネク文字（ą, ę, ų）と組み合わせて現れる。'
  },
  {
    character: 'Ā / ā',
    languages: ['ラトビア語'],
    description: 'ラトビア語独占文字。地名や看板に1つでもあればラトビア確定。他の長母音（ū, ī）と組み合わせて現れる。'
  },
  {
    character: 'Č / č',
    languages: ['リトアニア語', 'ラトビア語', 'チェコ語', 'スロベニア語'],
    description: 'ch 音。組み合わせで国判定。'
  },
  {
    character: 'Š / š',
    languages: ['リトアニア語', 'ラトビア語', 'エストニア語', 'チェコ語', 'スロベニア語', 'クロアチア語', 'セルビア語'],
    description: 'sh 音。バルト三国は連発する傾向。'
  },
  {
    character: 'Ž / ž',
    languages: ['リトアニア語', 'ラトビア語', 'エストニア語', 'チェコ語', 'スロベニア語', 'クロアチア語', 'セルビア語'],
    description: 'zh 音。ė/ā/õ との組み合わせで国特定。'
  },
  {
    character: 'Ř / ř',
    languages: ['チェコ語'],
    description: 'チェコ語独占文字。地名や看板に1つでもあればチェコ確定。GeoGuessrで最も信頼できる判別文字の一つ。'
  },
  {
    character: 'Þ / þ',
    languages: ['アイスランド語'],
    description: 'アイスランド語独占文字。地名や看板に1つでもあればアイスランド確定。Ðと組み合わせで見つけることが多い。'
  },
  {
    character: 'Ð / ð',
    languages: ['アイスランド語'],
    description: 'アイスランド語独占文字。地名や看板に1つでもあればアイスランド確定。Þと組み合わせで見つけることが多い。'
  },
  {
    character: 'Ë / ë（ラテン文字）',
    languages: ['アルバニア語'],
    description: 'アルバニア語独占文字。キリル文字圏でない場所で見つけたら確実にアルバニア。山間部の看板や地名で頻出。※キリル文字圏では普通のロシア語等に出現するため注意。'
  },
  {
    character: 'Ů / ů',
    languages: ['チェコ語'],
    description: 'チェコ語独占文字。地名や看板に1つでもあればチェコ確定。Řと並んでチェコ特定の決め手となる。'
  },
  {
    character: 'Đ / đ',
    languages: ['クロアチア語', 'ボスニア語', 'セルビア語'],
    description: 'クロス付き D（ストローク D）。バルカンの地名で頻出。GeoGuessr ではバルカン判定の切り札。'
  },
  {
    character: 'Ķ / ķ',
    languages: ['ラトビア語'],
    description: 'セディーリャ付き K（下に小さなカンマ）。子音＋カンマが複数並ぶとラトビア確定。'
  },
  {
    character: 'Ų / ų',
    languages: ['リトアニア語'],
    description: 'リトアニア語独占文字。地名や看板に1つでもあればリトアニア確定。他のオゴネク文字（ą, ę）と組み合わせて現れる。'
  },
  {
    character: 'İ / ı',
    languages: ['トルコ語', 'アゼルバイジャン語'],
    description: '大文字 İ（点付き）と小文字 ı（点なし）のペアはトルコ語系のみ。'
  },
  {
    character: 'ẞ / ß',
    languages: ['ドイツ語'],
    description: 'ドイツ語独占文字。地名や看板に1つでもあればドイツ確定。GeoGuessrで最も信頼できる判別文字の一つ。'
  }
]