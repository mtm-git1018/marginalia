function bgmConverter(bgm: string):string|null {
  switch (bgm) {
    case 'rain':
    return '/sound/rain_sound.mp3'
    
    case 'ocean':
      return '/sound/ocean_wave.mp3';
    
    case 'fire':
      return '/sound/fire_sound.mp3';
    
    case 'forrest':
      return '/sound/forrest_sound.mp3';
    
    case 'cafe':
      return '/sound/cafe_sound.mp3'
    
    default:
      return null;
  }
}
export default bgmConverter;
