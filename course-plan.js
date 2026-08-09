// Use the full 120-exercise bank across the 20-day course. Each day has
// three practice blocks, and each block contains two exercises of one type.
const COURSE_ACTIVITY_PATTERN = [
  ['Story Listening', 'Choose the Line', 'Missing Word'],
  ['Dialogue', 'Story Listening', 'What Did They Mean?'],
  ['Choose the Line', 'Missing Word', 'Fast Scene'],
  ['Dialogue', 'What Did They Mean?', 'Fast Scene']
];

for (let level = 1; level <= 5; level++) {
  const queues = {};
  DATA.listeningBank120
    .filter(item => item.level === level)
    .forEach(item => (queues[item.activity] ??= []).push(item));

  for (let offset = 0; offset < 4; offset++) {
    const day = DATA.course20[(level - 1) * 4 + offset];
    const labels = COURSE_ACTIVITY_PATTERN[offset];
    day.level = level;
    day.listenLabels = [...labels];
    day.listenIds = labels.map(label =>
      queues[label].splice(0, 2).map(item => item.id)
    );
    day.steps = ['story', 'vocab', 'listen1', 'listen2', 'listen3'];
  }
}
