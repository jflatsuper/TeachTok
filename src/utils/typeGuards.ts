export function isMCQ(item: any): item is MCQ {
    return 'options' in item;
  }
  