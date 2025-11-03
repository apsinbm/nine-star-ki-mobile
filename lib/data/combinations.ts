/**
 * Nine Star Ki Combinations (81 Profiles)
 *
 * Each combination represents the interaction of three stars:
 * Principal Star (1-9) + Month Star (1-9) + Energetic Star (1-9)
 *
 * Content is presented in neutral, factual language describing
 * typical patterns for each combination.
 */

export interface Combination {
  key: string // "1.1.5" format
  principalStar: number
  monthStar: number
  energeticStar: number
  healthy: string
  unhealthy: string
}

export const COMBINATIONS: Record<string, Combination> = {
  '1.1.5': {
    key: '1.1.5',
    principalStar: 1,
    monthStar: 1,
    energeticStar: 5,
    healthy: 'Natural intuition and deep willpower combine with a strong need for freedom and independence. Highly creative, often living unconventional lives. Can develop inner strength to help others do the same.',
    unhealthy: 'Potential for arrogance, secretiveness, or suspicion.'
  },
  '1.2.4': {
    key: '1.2.4',
    principalStar: 1,
    monthStar: 2,
    energeticStar: 4,
    healthy: 'Adaptable and caring nature. People find them easygoing and likable. May be artistic, yet cautious in life overall. Life paths naturally involve lots of change.',
    unhealthy: 'Fear and self-doubt can block progress.'
  },
  '1.3.3': {
    key: '1.3.3',
    principalStar: 1,
    monthStar: 3,
    energeticStar: 3,
    healthy: 'Creative nature with idealistic desire to change the world. Surprising drive and determination. Strong inner discipline enables achievement of goals.',
    unhealthy: 'Can be too direct and disregard others\' feelings.'
  },
  '1.4.2': {
    key: '1.4.2',
    principalStar: 1,
    monthStar: 4,
    energeticStar: 2,
    healthy: 'Gentle way of being that belies deep inner strength. Always wanting to help others, willing to patiently set their own needs aside. Creative nature provides artistic expression.',
    unhealthy: 'May struggle with self-doubt or give away power to others.'
  },
  '1.5.1': {
    key: '1.5.1',
    principalStar: 1,
    monthStar: 5,
    energeticStar: 1,
    healthy: 'Deep emotional nature with incredible willpower. Strong need for freedom and independence factoring into every decision. Highly creative and intuitive, often drawn to artistic or healing work.',
    unhealthy: 'May be overly ambitious, secretive, or ruled by fear.'
  },
  '1.6.9': {
    key: '1.6.9',
    principalStar: 1,
    monthStar: 6,
    energeticStar: 9,
    healthy: 'Creative free spirit—independent and adventurous. Warm and gracious with others, able to put anyone at ease. Benefits from regular solitude despite extroverted moments.',
    unhealthy: 'Can feel overwhelmed and anxious, especially when life moves too fast.'
  },
  '1.7.8': {
    key: '1.7.8',
    principalStar: 1,
    monthStar: 7,
    energeticStar: 8,
    healthy: 'Imaginative nature often leading to work in the arts. Loves private time where creative juices flow. May hold back communication to spare others\' feelings or for privacy.',
    unhealthy: 'Can be insecure, secretive, or stubborn.'
  },
  '1.8.7': {
    key: '1.8.7',
    principalStar: 1,
    monthStar: 8,
    energeticStar: 7,
    healthy: 'Needs space and regular solitude—like vitamins for this combination. Can power through difficult times with deep inner strength. Natural charm with people comes from ability to read them well.',
    unhealthy: 'May have secrets or say whatever they think people want to hear.'
  },
  '1.9.6': {
    key: '1.9.6',
    principalStar: 1,
    monthStar: 9,
    energeticStar: 6,
    healthy: 'Intuitive and sensitive with insights others lack. Can be a very inspiring influence. Strong vision of what to do in any situation and concern for doing things right.',
    unhealthy: 'Can be obstinate or try to manipulate people.'
  },
  '2.1.6': {
    key: '2.1.6',
    principalStar: 2,
    monthStar: 1,
    energeticStar: 6,
    healthy: 'Kind and caring, highly valuing family and relationships. Able to take charge when necessary and do what needs to be done. Has emotional depth others may not recognize.',
    unhealthy: 'May act like a victim or hold on to hurt feelings far too long.'
  },
  '2.2.5': {
    key: '2.2.5',
    principalStar: 2,
    monthStar: 2,
    energeticStar: 5,
    healthy: 'Compelled to help others, potentially ending up at the center of movements or organizations despite self-confidence struggles. Wants deep, lasting friendships and invests time in relationships.',
    unhealthy: 'Can be critical, controlling, or feel sorry for themselves.'
  },
  '2.3.4': {
    key: '2.3.4',
    principalStar: 2,
    monthStar: 3,
    energeticStar: 4,
    healthy: 'Wants to make the world better. Works best within organizations, gently changing systems from inside rather than as a rebellious activist. People respond to their kind, gentle nature.',
    unhealthy: 'Can get lost in self-doubt, overthink things, or struggle with depression.'
  },
  '2.4.3': {
    key: '2.4.3',
    principalStar: 2,
    monthStar: 4,
    energeticStar: 3,
    healthy: 'Enormous drive to be of service. Real force for change in the world. Can motivate people to create new visions and keep them moving forward.',
    unhealthy: 'May struggle with frustration, anger, or depression.'
  },
  '2.5.2': {
    key: '2.5.2',
    principalStar: 2,
    monthStar: 5,
    energeticStar: 2,
    healthy: 'Kind and generous with sincere desire to do good work. Important to establish good home and have lifelong friends. Attention goes toward others\' needs and they enjoy being a support.',
    unhealthy: 'Can criticize and complain or act like a victim.'
  },
  '2.6.1': {
    key: '2.6.1',
    principalStar: 2,
    monthStar: 6,
    energeticStar: 1,
    healthy: 'Works hard on projects because they care and want to get it right. Needs freedom and flow in life while honoring responsibilities and devoting time to authentic connections.',
    unhealthy: 'May expect others to take care of them without reciprocating.'
  },
  '2.7.9': {
    key: '2.7.9',
    principalStar: 2,
    monthStar: 7,
    energeticStar: 9,
    healthy: 'Warm, affectionate, and attuned to communication. Strong sense of devotion often leading to helping careers, especially teaching. Work may revolve around their life.',
    unhealthy: 'Hypersensitive and may sacrifice themselves for others to an extreme.'
  },
  '2.8.8': {
    key: '2.8.8',
    principalStar: 2,
    monthStar: 8,
    energeticStar: 8,
    healthy: 'Incredibly loyal and caring with quiet depth of strength. Provides sense of safety and stability for people in their life. Works long and hard, always helping the underdog.',
    unhealthy: 'Can be judgmental and resistant to change.'
  },
  '2.9.7': {
    key: '2.9.7',
    principalStar: 2,
    monthStar: 9,
    energeticStar: 7,
    healthy: 'Sincere desire to help others and make them happy. Far more sensitive to people\'s energy than they may realize. Charming and gracious, can excel at inspiring people to live better lives.',
    unhealthy: 'Responsibilities may feel too heavy, with struggles around perfectionism and energy sensitivity.'
  },
  '3.1.7': {
    key: '3.1.7',
    principalStar: 3,
    monthStar: 1,
    energeticStar: 7,
    healthy: 'Energetic and enthusiastic, easily charming people. More sensitive and emotional than others recognize. Highly creative with desire to use ideas to make the world better.',
    unhealthy: 'Overreacts to criticism and may be driven by desire for status.'
  },
  '3.2.6': {
    key: '3.2.6',
    principalStar: 3,
    monthStar: 2,
    energeticStar: 6,
    healthy: 'Driven to prove themselves and feel proud of achievements. When engaged in work, manages self-doubt and takes charge, attending to details so things are done well.',
    unhealthy: 'Can be competitive, judgmental, or critical.'
  },
  '3.3.5': {
    key: '3.3.5',
    principalStar: 3,
    monthStar: 3,
    energeticStar: 5,
    healthy: 'Powerful vitality drawing others\' attention. Very goal oriented and feels driven to stay active. Always driven to learn, grow, achieve, and often helps others do the same.',
    unhealthy: 'May struggle with anger, depression, or addiction.'
  },
  '3.4.4': {
    key: '3.4.4',
    principalStar: 3,
    monthStar: 4,
    energeticStar: 4,
    healthy: 'Gentle, adaptable nature helping them work well with people. May assist others in improving their lives. Active mind can think of multiple solutions to any problem.',
    unhealthy: 'Can be skeptical, judgmental, or challenged by depression.'
  },
  '3.5.3': {
    key: '3.5.3',
    principalStar: 3,
    monthStar: 5,
    energeticStar: 3,
    healthy: 'May be a catalyst for others, not coddling but moving them toward positive growth. Logical mind sees what\'s wrong in the world, strong drive to change things for the better.',
    unhealthy: 'Can struggle with anger, depression, or addiction.'
  },
  '3.6.2': {
    key: '3.6.2',
    principalStar: 3,
    monthStar: 6,
    energeticStar: 2,
    healthy: 'Driven and dedicated with firm ideas of what they want from life. Energy to achieve goals and patience to finish what they start. Relationships provide important lessons.',
    unhealthy: 'Can be selfish or demanding and sensitive to criticism.'
  },
  '3.7.1': {
    key: '3.7.1',
    principalStar: 3,
    monthStar: 7,
    energeticStar: 1,
    healthy: 'Highly creative, ambitious and driven, yet always honoring need for freedom. Vitality and determination can take them far. As they trust intuition, life carries them to interesting places.',
    unhealthy: 'May be stubborn, pushy, or ruled by fear.'
  },
  '3.8.9': {
    key: '3.8.9',
    principalStar: 3,
    monthStar: 8,
    energeticStar: 9,
    healthy: 'Strong personality and powerful energy able to inspire and motivate others. Combines logical approach with warmth and enthusiasm. Focused drive helps achieve goals.',
    unhealthy: 'Can be judgmental, pushy, or impulsive.'
  },
  '3.9.8': {
    key: '3.9.8',
    principalStar: 3,
    monthStar: 9,
    energeticStar: 8,
    healthy: 'Hard worker whose focus may be on helping others or making the world better. Combining logical mind and intuitive insight with determination enables great accomplishment.',
    unhealthy: 'Can be a workaholic or struggle with anger.'
  },
  '4.1.8': {
    key: '4.1.8',
    principalStar: 4,
    monthStar: 1,
    energeticStar: 8,
    healthy: 'Adaptable nature with emotional depth others might not recognize. Hard worker with high moral principles. Lifelong student always looking to develop themselves.',
    unhealthy: 'Can be skeptical, judgmental, or lack self-confidence.'
  },
  '4.2.7': {
    key: '4.2.7',
    principalStar: 4,
    monthStar: 2,
    energeticStar: 7,
    healthy: 'Excellent communicator—witty and charming, able to make everyone feel welcome. As they manage perfectionism, they empower themselves to create a beautiful life and feel proud of accomplishments.',
    unhealthy: 'Can overanalyze, procrastinate, or be too self-critical.'
  },
  '4.3.6': {
    key: '4.3.6',
    principalStar: 4,
    monthStar: 3,
    energeticStar: 6,
    healthy: 'Important to feel proud of achievements, may rise to the top within structured systems. Always focused on getting work done and learning new things. Doesn\'t like to waste time or effort.',
    unhealthy: 'Can be cynical or easily frustrated with others.'
  },
  '4.4.5': {
    key: '4.4.5',
    principalStar: 4,
    monthStar: 4,
    energeticStar: 5,
    healthy: 'Easygoing, diplomatic nature with potential to influence career paths. Excellent thinker and idealist. Can use analytical ability to help others. Life full of change and growth.',
    unhealthy: 'Can be indecisive or suffer from anger or depression.'
  },
  '4.5.4': {
    key: '4.5.4',
    principalStar: 4,
    monthStar: 5,
    energeticStar: 4,
    healthy: 'Idealistically works to make the world better. Easily deals with variety of personalities. Life takes many directions, and they\'re adaptable enough to handle all changes.',
    unhealthy: 'Can be moody, overthink everything, or deal with depression.'
  },
  '4.6.3': {
    key: '4.6.3',
    principalStar: 4,
    monthStar: 6,
    energeticStar: 3,
    healthy: 'Focused and goal oriented with logical mind that really gets things done. Works hard to do things right and adjusts plans to suit changing circumstances. Always looking to the future.',
    unhealthy: 'Too hard on themselves and can be challenged by fear of others\' judgment.'
  },
  '4.7.2': {
    key: '4.7.2',
    principalStar: 4,
    monthStar: 7,
    energeticStar: 2,
    healthy: 'Kind and sensitive, adapting easily to others\' needs while aware of their feelings. Naturally artistic with good common sense. Drawn to helping others regardless of job type.',
    unhealthy: 'Tends to overthink everything and doubt themselves and others.'
  },
  '4.8.1': {
    key: '4.8.1',
    principalStar: 4,
    monthStar: 8,
    energeticStar: 1,
    healthy: 'Combines powerful mind with creative and intuitive nature. Always needs freedom in how and when they do work. Can stay centered through life\'s changes.',
    unhealthy: 'Can struggle with self-doubt, anger, or depression.'
  },
  '4.9.9': {
    key: '4.9.9',
    principalStar: 4,
    monthStar: 9,
    energeticStar: 9,
    healthy: 'Bright spirit and great sense of humor—everyone likes them on first sight. Can uplift and inspire people. If they focus consistently to complete projects, real progress is possible.',
    unhealthy: 'Can deal with depression or anxiety, or repeatedly invest everything in projects that fall apart.'
  },
  '5.1.9': {
    key: '5.1.9',
    principalStar: 5,
    monthStar: 1,
    energeticStar: 9,
    healthy: 'People magnet with big personality. Emotions run even more powerful than others realize. Driven to get to the top and may end up in the spotlight.',
    unhealthy: 'Can be controlling or have insatiable need to be the center of attention.'
  },
  '5.2.8': {
    key: '5.2.8',
    principalStar: 5,
    monthStar: 2,
    energeticStar: 8,
    healthy: 'Powerful force in the world, always drawn to helping others. Strong need for connection and community. Incredibly generous with time and energy, works hard at whatever they do.',
    unhealthy: 'Can constantly create drama or be extremely demanding.'
  },
  '5.3.7': {
    key: '5.3.7',
    principalStar: 5,
    monthStar: 3,
    energeticStar: 7,
    healthy: 'Excellent communicator and very charming—if they wanted to, could easily influence others. Family and relationships very important. Need to create beautiful home to enjoy them in.',
    unhealthy: 'May manipulate or use people to get what they want.'
  },
  '5.4.6': {
    key: '5.4.6',
    principalStar: 5,
    monthStar: 4,
    energeticStar: 6,
    healthy: 'Driven to achieve big things and can hold powerful place in the world. Important to earn genuine respect and recognition. Works hard to reach certain level of success.',
    unhealthy: 'May be controlling and demanding in desire for power.'
  },
  '5.5.5': {
    key: '5.5.5',
    principalStar: 5,
    monthStar: 5,
    energeticStar: 5,
    healthy: 'Force of nature—resourceful and resilient with powerful need for authentic relationships. As they accept their power, they can do great work centered around helping others.',
    unhealthy: 'May feel vastly unappreciated, and their anger can be epic.'
  },
  '5.6.4': {
    key: '5.6.4',
    principalStar: 5,
    monthStar: 6,
    energeticStar: 4,
    healthy: 'Key to do something important in the world, especially to right wrongs or improve lives. Life may take different directions, but always wants sense of rootedness amid change.',
    unhealthy: 'Can be demanding and controlling or act without integrity.'
  },
  '5.7.3': {
    key: '5.7.3',
    principalStar: 5,
    monthStar: 7,
    energeticStar: 3,
    healthy: 'Powerful personality with strong drive and enthusiasm for living fully. Needs to stay active and think about what\'s next. Lifelong friendships essential for feeling fulfilled.',
    unhealthy: 'Can try to dominate others or push too hard for what they want.'
  },
  '5.8.2': {
    key: '5.8.2',
    principalStar: 5,
    monthStar: 8,
    energeticStar: 2,
    healthy: 'Generous friend who wants to stay connected to community of people who know and appreciate them. Loves to help others and is especially thrilled when they act on advice.',
    unhealthy: 'Can be a know-it-all or needy and selfish.'
  },
  '5.9.1': {
    key: '5.9.1',
    principalStar: 5,
    monthStar: 9,
    energeticStar: 1,
    healthy: 'Creative and strong willed with need to express talents to feel fulfilled. Wants freedom in how they live but also needs sense of stability.',
    unhealthy: 'Can be demanding and may behave without integrity.'
  },
  '6.1.1': {
    key: '6.1.1',
    principalStar: 6,
    monthStar: 1,
    energeticStar: 1,
    healthy: 'Intuitive and creative, wanting to do things their way—not only because they care about quality but because they\'re so independent. Can develop into visionary in their field.',
    unhealthy: 'Can be insecure, fearful, and have secret agendas.'
  },
  '6.2.9': {
    key: '6.2.9',
    principalStar: 6,
    monthStar: 2,
    energeticStar: 9,
    healthy: 'Potential to become authority with their work. Important to achieve level of power and recognition. Life offers key lessons about managing sensitivity to reach goals.',
    unhealthy: 'Can be narcissistic, arrogant, and dismissive.'
  },
  '6.3.8': {
    key: '6.3.8',
    principalStar: 6,
    monthStar: 3,
    energeticStar: 8,
    healthy: 'High principles and works hard to achieve goals. Idealistic nature places value on doing the right thing. Can find it frustrating to work with less aware people.',
    unhealthy: 'Can be arrogant, controlling, or disdainful.'
  },
  '6.4.7': {
    key: '6.4.7',
    principalStar: 6,
    monthStar: 4,
    energeticStar: 7,
    healthy: 'Charming and sensitive to others, putting care into everything. May go back and forth on decisions before settling on direction, but then assured it\'s the right one.',
    unhealthy: 'Can be critical, controlling, or status-driven.'
  },
  '6.5.6': {
    key: '6.5.6',
    principalStar: 6,
    monthStar: 5,
    energeticStar: 6,
    healthy: 'Highly aware, sensitive to subtleties and nuances in any situation, care about every detail. As they manage sensitivity, they can achieve goals and hold authority and power.',
    unhealthy: 'May be overly sensitive, controlling, or critical.'
  },
  '6.6.5': {
    key: '6.6.5',
    principalStar: 6,
    monthStar: 6,
    energeticStar: 5,
    healthy: 'Leader, not follower, with natural sense of authority. Important to feel they\'ve earned others\' respect and done quality work. Potential to be visionary in their field.',
    unhealthy: 'Can be demanding, controlling, or hypersensitive.'
  },
  '6.7.4': {
    key: '6.7.4',
    principalStar: 6,
    monthStar: 7,
    energeticStar: 4,
    healthy: 'Idealistic and perfectionistic, caring very much about doing things right. Gentle charm with people, striving for meaning and authenticity in relationships and life.',
    unhealthy: 'Can overanalyze and be both critical and self-critical.'
  },
  '6.8.3': {
    key: '6.8.3',
    principalStar: 6,
    monthStar: 8,
    energeticStar: 3,
    healthy: 'Focused drive can land them in position of power. Important to do something special with life. High principles mean they don\'t want to waste time on superficialities.',
    unhealthy: 'Can be judgmental, arrogant, or disdainful.'
  },
  '6.9.2': {
    key: '6.9.2',
    principalStar: 6,
    monthStar: 9,
    energeticStar: 2,
    healthy: 'Kindness and warmth make it easy for people to like them immediately. Strong sense of obligation and importance of doing a good job. Relationships teach important lessons.',
    unhealthy: 'Can lack energetic boundaries or be controlling.'
  },
  '7.1.2': {
    key: '7.1.2',
    principalStar: 7,
    monthStar: 1,
    energeticStar: 2,
    healthy: 'Attuned to energy around them, making anyone feel welcomed and appreciated. Extremely sensitive, noticing subtle things about people. Naturally drawn to helping others.',
    unhealthy: 'Can be hypersensitive and too cautious, or lack confidence.'
  },
  '7.2.1': {
    key: '7.2.1',
    principalStar: 7,
    monthStar: 2,
    energeticStar: 1,
    healthy: 'Quiet charm and sincere desire to make things better serve well personally and professionally. Intuitive, creative, and highly aware. Best to have freedom in how they work.',
    unhealthy: 'Can be insecure, fearful, and challenged by indecisiveness.'
  },
  '7.3.9': {
    key: '7.3.9',
    principalStar: 7,
    monthStar: 3,
    energeticStar: 9,
    healthy: 'Creative and expressive, excellent communicator with good sense of humor and natural warmth. Needs regular solitude and freedom in work—not suited for isolation.',
    unhealthy: 'Can be emotionally reactive or manipulative.'
  },
  '7.4.8': {
    key: '7.4.8',
    principalStar: 7,
    monthStar: 4,
    energeticStar: 8,
    healthy: 'High standards and works very hard to achieve desired results. Extremely aware and kind, caring friend. Career may involve helping others, though always needs to do work their way.',
    unhealthy: 'Can lack confidence or get blocked by insecurity.'
  },
  '7.5.7': {
    key: '7.5.7',
    principalStar: 7,
    monthStar: 5,
    energeticStar: 7,
    healthy: 'Articulate and charming, reading others well—excellent communicator. Natural sense of style. As they manage sensitivity, they enjoy creating a beautiful life.',
    unhealthy: 'Can be critical, controlling, or highly anxious.'
  },
  '7.6.6': {
    key: '7.6.6',
    principalStar: 7,
    monthStar: 6,
    energeticStar: 6,
    healthy: 'Quiet reserve may belie high awareness level. Lovely way with people and work always beautifully done. As they manage perfectionism, they stop hiding their light.',
    unhealthy: 'Perfectionism and hypersensitivity can keep their life too limited.'
  },
  '7.7.5': {
    key: '7.7.5',
    principalStar: 7,
    monthStar: 7,
    energeticStar: 5,
    healthy: 'Extremely charming and adept at creating wonderful experiences for people regardless of career. High sensitivity level means great attention to details and focus on perfecting everything.',
    unhealthy: 'Can be controlling and anxious or present a false front.'
  },
  '7.8.4': {
    key: '7.8.4',
    principalStar: 7,
    monthStar: 8,
    energeticStar: 4,
    healthy: 'Sincere charm with people naturally feeling comfortable. Wants to make real difference in the world. High standards enable powerful results with their work.',
    unhealthy: 'Can be judgmental and easily frustrated.'
  },
  '7.9.3': {
    key: '7.9.3',
    principalStar: 7,
    monthStar: 9,
    energeticStar: 3,
    healthy: 'Creative, expressive, and witty—can take them far. Important to feel they\'ve achieved something meaningful. As they manage anxiety, nothing can stop them.',
    unhealthy: 'Can be highly anxious or manipulative.'
  },
  '8.1.3': {
    key: '8.1.3',
    principalStar: 8,
    monthStar: 1,
    energeticStar: 3,
    healthy: 'Ambitious, hardworking, very loyal friend. Driven and devoted to doing good in the world. Can use determination and strong will to accomplish powerful results helping large groups.',
    unhealthy: 'Can be easily frustrated or act childishly.'
  },
  '8.2.2': {
    key: '8.2.2',
    principalStar: 8,
    monthStar: 2,
    energeticStar: 2,
    healthy: 'Generous nature and care that everyone is treated fairly. Works hard to support people in their life. Likes to put down roots and needs community of like-minded friends.',
    unhealthy: 'Can be judgmental and take things too seriously.'
  },
  '8.3.1': {
    key: '8.3.1',
    principalStar: 8,
    monthStar: 3,
    energeticStar: 1,
    healthy: 'Wisdom and willpower to push through difficult circumstances and do powerful work in the world. Always needs solid relationships and sense of home, but also plenty of alone time.',
    unhealthy: 'Can be antisocial or struggle with anger and obstinacy.'
  },
  '8.4.9': {
    key: '8.4.9',
    principalStar: 8,
    monthStar: 4,
    energeticStar: 9,
    healthy: 'Warm and caring. Takes work seriously while also finding time for fun. May achieve some level of fame but still needs regular private time.',
    unhealthy: 'Can be insecure and too much of a pleaser.'
  },
  '8.5.8': {
    key: '8.5.8',
    principalStar: 8,
    monthStar: 5,
    energeticStar: 8,
    healthy: 'Incredibly kind and generous to family and friends—all relationships are important. Learns from mistakes, deepening wisdom, and driven to share what they\'ve learned.',
    unhealthy: 'Can be judgmental, angry, or reclusive.'
  },
  '8.6.7': {
    key: '8.6.7',
    principalStar: 8,
    monthStar: 6,
    energeticStar: 7,
    healthy: 'Kind sincerity combined with deep sensitivity creates lovely presence with people. Strong willed and dedicated, working hard to help others. Life becomes easier as they manage boundaries.',
    unhealthy: 'Can be anxious, perfectionistic, and controlling.'
  },
  '8.7.6': {
    key: '8.7.6',
    principalStar: 8,
    monthStar: 7,
    energeticStar: 6,
    healthy: 'Wants to live meaningful life and make world better. Important to have sense of the sacred. Ability to inspire others to live their best lives.',
    unhealthy: 'Can be arrogant, critical, and demanding.'
  },
  '8.8.5': {
    key: '8.8.5',
    principalStar: 8,
    monthStar: 8,
    energeticStar: 5,
    healthy: 'Enormous inner strength and nurturing presence for everyone in their life. Always looks for opportunities to help make things better, with patience to set own needs aside.',
    unhealthy: 'Can be too driven, stubborn, and judgmental.'
  },
  '8.9.4': {
    key: '8.9.4',
    principalStar: 8,
    monthStar: 9,
    energeticStar: 4,
    healthy: 'Comes across as easygoing and charming with generous spirit and caring heart. Lifelong student wanting to share learning to make world better.',
    unhealthy: 'Strong emotions can cause impulsiveness or poor choices.'
  },
  '9.1.4': {
    key: '9.1.4',
    principalStar: 9,
    monthStar: 1,
    energeticStar: 4,
    healthy: 'Personable and fun loving, naturally attracting attention. Feels things more deeply than others may know. Life brings lots of change, which they would find boring without.',
    unhealthy: 'Lust for fame can negatively affect judgment.'
  },
  '9.2.3': {
    key: '9.2.3',
    principalStar: 9,
    monthStar: 2,
    energeticStar: 3,
    healthy: 'Important to live their passion, though they may not stick with things long-term because they seek change and new challenges. Better not to work in isolation due to needing stimulation.',
    unhealthy: 'Can be overly emotional or aggressive.'
  },
  '9.3.2': {
    key: '9.3.2',
    principalStar: 9,
    monthStar: 3,
    energeticStar: 2,
    healthy: 'Naturally warm and affectionate with passion for life. Inherent ability to inspire people. Potential to teach important lessons about compassion and acceptance.',
    unhealthy: 'May have trouble letting go of relationships, or the other person could refuse to leave.'
  },
  '9.4.1': {
    key: '9.4.1',
    principalStar: 9,
    monthStar: 4,
    energeticStar: 1,
    healthy: 'Warm and easygoing presence with delicate emotional nature. Always needs change and variety to experience new things and express creativity.',
    unhealthy: 'Can be insecure or overly sensitive to rejection.'
  },
  '9.5.9': {
    key: '9.5.9',
    principalStar: 9,
    monthStar: 5,
    energeticStar: 9,
    healthy: 'Creative and expressive, driven to live their passion and spread love. If they stay focused, potential for great success. Nothing worth doing unless it lights them up.',
    unhealthy: 'Can be vain and manipulative.'
  },
  '9.6.8': {
    key: '9.6.8',
    principalStar: 9,
    monthStar: 6,
    energeticStar: 8,
    healthy: 'Want to achieve level of power in life. Because of motivation, may well rise to the top. Hardworking and dedicated. People may be surprised by how seriously they take their work.',
    unhealthy: 'Can be controlling or critical.'
  },
  '9.7.7': {
    key: '9.7.7',
    principalStar: 9,
    monthStar: 7,
    energeticStar: 7,
    healthy: 'Warm and gracious, very attuned to energy of other people and sincere in desire to make them happy. Everything they create will be beautiful, including experiences for others.',
    unhealthy: 'Can be anxious and need constant attention.'
  },
  '9.8.6': {
    key: '9.8.6',
    principalStar: 9,
    monthStar: 8,
    energeticStar: 6,
    healthy: 'Charismatic and driven to do something meaningful with their life. Single-minded in desire to reach goals and make real impact. Can inspire others with their vision and dedication.',
    unhealthy: 'Can be obsessive or struggle with perfectionism.'
  },
  '9.9.5': {
    key: '9.9.5',
    principalStar: 9,
    monthStar: 9,
    energeticStar: 5,
    healthy: 'Natural ability to understand and connect with others. Idealistic and visionary, wanting to help humanity progress. Can accomplish extraordinary things when focused on meaningful goals.',
    unhealthy: 'Can be scattered or try to do too much at once.'
  }
}

/**
 * Get combination by principal, month, and energetic stars
 */
export function getCombination(
  principalStar: number,
  monthStar: number,
  energeticStar: number
): Combination | undefined {
  const key = `${principalStar}.${monthStar}.${energeticStar}`
  return COMBINATIONS[key]
}
