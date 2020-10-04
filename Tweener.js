/*
  Tweener.js
  ver 2.0.0
  tw: @nulldesign
*/

export default class Tweener{
  constructor(){}

  linear(t,b,c,d)
  {
    return c*t/d + b;
  }
  
  //  QUAD
  easeInQuad(t,b,c,d)
  {
    return c*(t/=d)*t + b;
  }
  
  easeOutQuad(t,b,c,d)
  {
    return -c *(t/=d)*(t-2) + b;
  }
  
  easeInOutQuad(t,b,c,d)
  {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  }
  
  easeOutInQuad(t,b,c,d)
  {
    if (t < d/2) return this.easeOutQuad (t*2, b, c/2, d);
    return this.easeInQuad((t*2)-d, b+c/2, c/2, d);
  }
  
  //  CUBIC
  easeInCubic(t,b,c,d)
  {
    return c*(t/=d)*t*t + b;
  }
  
  easeOutCubic(t,b,c,d)
  {
    return c*((t=t/d-1)*t*t + 1) + b;
  }
  
  easeInOutCubic(t,b,c,d)
  {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  }
  
  easeOutInCubic(t,b,c,d)
  {
    if (t < d/2) return this.easeOutCubic (t*2, b, c/2, d);
    return this.easeInCubic((t*2)-d, b+c/2, c/2, d);
  }
  
  //  QUART
  easeInQuart(t,b,c,d)
  {
    return c*(t/=d)*t*t*t + b;
  }
  
  easeOutQuart(t,b,c,d)
  {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  }
  
  easeInOutQuart(t,b,c,d)
  {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b
  }
  
  easeOutInQuart(t,b,c,d)
  {
    if (t < d/2) return this.easeOutQuart (t*2, b, c/2, d);
    return this.easeInQuart((t*2)-d, b+c/2, c/2, d);
  }
  
  //  QUINT
  easeInQuint(t,b,c,d)
  {
    return c*(t/=d)*t*t*t*t + b;
  }
  
  easeOutQuint(t,b,c,d)
  {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  }
  
  easeInOutQuint(t,b,c,d)
  {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  }
  
  easeOutInQuint(t,b,c,d)
  {
    if (t < d/2) return this.easeOutQuint (t*2, b, c/2, d);
    return this.easeInQuint((t*2)-d, b+c/2, c/2, d);
  }
  
  //  SINE
  easeInSine(t,b,c,d)
  {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  }
  
  easeOutSine(t,b,c,d)
  {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  }
  
  easeInOutSine(t,b,c,d)
  {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  }
  
  easeOutInSine(t,b,c,d)
  {
    if (t < d/2) return this.easeOutSine (t*2, b, c/2, d);
    return this.easeInSine((t*2)-d, b+c/2, c/2, d);
  }
  
  //  EXPO
  easeInExpo(t,b,c,d)
  {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b - c * 0.001;
  }
  
  easeOutExpo(t,b,c,d)
  {
    return (t==d) ? b+c : c * 1.001 * (-Math.pow(2, -10 * t/d) + 1) + b;
  }
  
  easeInOutExpo(t,b,c,d)
  {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b - c * 0.0005;
    return c/2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + b;
  }
  
  easeOutInExpo(t,b,c,d)
  {
    if (t < d/2) return this.easeOutExpo (t*2, b, c/2, d);
    return this.easeInExpo((t*2)-d, b+c/2, c/2, d);
  }
  
  //  CIRC
  easeInCirc(t,b,c,d)
  {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  }
  
  easeOutCirc(t,b,c,d)
  {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  }
  
  easeInOutCirc(t,b,c,d)
  {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  }
  
  easeOutInCirc(t,b,c,d)
  {
    if (t < d/2) return this.easeOutCirc (t*2, b, c/2, d);
    return this.easeInCirc((t*2)-d, b+c/2, c/2, d);
  }
  
  //  ELASTIC
  easeInElastic(t,b,c,d)
  {
    if (t==0) return b;
    if ((t/=d)==1) return b+c;
    var p = d*.3;
    var s;
    var a = 0;
    if (!Boolean(a) || a < Math.abs(c)) {
      a = c;
      s = p/4;
    } else {
      s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  }
  
  easeOutElastic(t,b,c,d)
  {
    if (t==0) return b;
    if ((t/=d)==1) return b+c;
    var p = d*.3;
    var s;
    var a = 0;
    if (!Boolean(a) || a < Math.abs(c)) {
      a = c;
      s = p/4;
    } else {
      s = p/(2*Math.PI) * Math.asin (c/a);
    }
    return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
  }
  
  easeInOutElastic(t,b,c,d)
  {
    if (t==0) return b;
    if ((t/=d/2)==2) return b+c;
    var p = d*(.3*1.5);
    var s;
    var a = 0;
    if (!Boolean(a) || a < Math.abs(c)) {
      a = c;
      s = p/4;
    } else {
      s = p/(2*Math.PI) * Math.asin (c/a);
    }
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  }
  
  easeOutInElastic(t,b,c,d)
  {
    if (t < d/2) return this.easeOutElastic (t*2, b, c/2, d);
    return this.easeInElastic((t*2)-d, b+c/2, c/2, d);
  }
  
  //  BACK
  easeInBack(t,b,c,d)
  {
    var s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  }
  
  easeOutBack(t,b,c,d)
  {
    var s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  }
  
  easeInOutBack(t,b,c,d)
  {
    var s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  }
  
  easeOutInBack(t,b,c,d)
  {
    if (t < d/2) return this.easeOutBack (t*2, b, c/2, d);
    return this.easeInBack((t*2)-d, b+c/2, c/2, d);
  }
  
  //  BOUNCE
  easeInBounce(t,b,c,d)
  {
    return c - this.easeOutBounce (d-t, 0, c, d) + b;
  }
  
  easeOutBounce(t,b,c,d)
  {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  }
  
  easeInOutBounce(t,b,c,d)
  {
    if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
    else return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
  
  easeOutInBounce(t,b,c,d)
  {
    if (t < d/2) return this.easeOutBounce (t*2, b, c/2, d);
    return this.easeInBounce((t*2)-d, b+c/2, c/2, d);
  }
}

//  THREE.js only
Tweener._props = {
  isInit: false,
  past: 0,
  loopKey: undefined
};
Tweener.init = () => 
{
  if( !Tweener._props.isInit )
  {
    Tweener._props.isInit = true;
    Tweener._props.past = new Date().getTime();
    Tweener._loop();
  }
}
Tweener.dispose = () =>
{
  if( Tweener._props.isInit )
  {
    Tweener._props.isInit = false;
    window.cancelAnimationFrame( Tweener._props.loopKey );

    let len = Tweener.useList.lnngth;
    while( len )
    {
      len--;
      let _p = Tweener.useList[len];
      _p.instance = null;
      _p = null;
    }
    Tweener.useList = [];
  }
}
Tweener.useList = [];
Tweener.addTween = ( instance, props ) =>
{
  props.transition = props.transition == undefined ? linear : props.transition;
  props.duration = props.duration == undefined ? 1.0 : props.duration;
  props.delay = props.delay == undefined ? 0.0 : props.delay;
  props.isPlaying = props.isPlaying == undefined ? true : props.isPlaying

  let _p = {
    instance: instance,
    transitionName: props.transition,
    transition: Tweener[props.transition],
    time: 0,
    duration: props.duration,
    delay: props.delay,
    isPlaying: props.isPlaying
  }

  if( props.onComplete ){ _p.onComplete = props.onComplete; }

  if( props.position )
  {
    _p.position = {};
    _p.position.start = instance.position.clone();
    _p.position.target = props.position.clone();
  }

  if( props.rotation )
  {
    _p.rotation = {};
    _p.rotation.start = instance.rotation.clone();
    _p.rotation.target = props.rotation.clone();
  }

  if( props.scale )
  {
    _p.scale = {};
    _p.scale.start = instance.scale.clone();
    _p.scale.target = props.scale.clone();
  }

  if( props.color && instance.material.color )
  {
    _p.color = {};
    _p.color.start = instance.material.color.clone();
    _p.color.target = props.color.clone();
  }

  if( props.opacity && instance.material.transparent && instance.material.opacity )
  {
    _p.opacity = {};
    _p.opacity.start = instance.material.opacity;
    _p.opacity.target = props.opacity;
  }

  Tweener.useList.push( _p );

  //  おまじない
  window.cancelAnimationFrame( Tweener._props.loopKey );
  Tweener._loop();

  return _p;
}
Tweener.removeTween = ( _instance ) =>
{
  let len = Tweener.useList.length;
  while( len )
  {
    len--;
    if( Tweener.useList[len].instance == _instance )
    {
      let _p = Tweener.useList.splice( len, 1 );
      _p = null;
      break;
    }
  }
}
Tweener.clearTweens = () =>
{
  let len = Tweener.useList.lnngth;
  while( len )
  {
    len--;
    let _p = Tweener.useList[len];
    _p.instance = null;
    _p = null;
  }
  Tweener.useList = [];
  window.cancelAnimationFrame( Tweener._props.loopKey );
}
Tweener.pauseTween = ( _instance ) =>
{
  let len = Tweener.useList.length;
  while( len )
  {
    len--;
    if( Tweener.useList[len].instance == _instance )
    {
      Tweener.useList[len].isPlaying = false;
      break;
    }
  }
}
Tweener.playTween = ( _instance ) =>
{
  let len = Tweener.useList.length;
  while( len )
  {
    len--;
    if( Tweener.useList[len].instance == _instance )
    {
      Tweener.useList[len].isPlaying = true;
      break;
    }
  }
}
Tweener.pauseAllTweens = ( _instance ) =>
{
  let len = Tweener.useList.length;
  while( len )
  {
    len--;
    Tweener.useList[len].isPlaying = false;
  }
}
Tweener.playAllTweens = ( _instance ) =>
{
  let len = Tweener.useList.length;
  while( len )
  {
    len--;
    Tweener.useList[len].isPlaying = true;
  }
}
Tweener._loop = () =>
{
  Tweener._props.loopKey = window.requestAnimationFrame( Tweener._loop );

  let len = Tweener.useList.length;
  if( len <= 0 )
  {
    window.cancelAnimationFrame( Tweener._props.loopKey );
    return;
  }

  //  time
  let _current = new Date().getTime();
  let _delta = ( _current - Tweener._props.past ) / 1000;
  Tweener._props.past = _current;


  while( len )
  {
    len--;
    let _p = Tweener.useList[len]
    if( _p.time - _p.delay <= _p.duration )
    {
      _p.time += _delta;
      let _time = _p.time - _p.delay;
      _time = _time < 0.0 ? 0.0 : _time;

      if( !_p.isPlaying )
      {
        continue;
      }

      //  pos, rot, sca はまとめられないかな？
      if( _p.position )
      {
        _p.instance.position.x = _p.transition( _time, _p.position.start.x, _p.position.target.x - _p.position.start.x, _p.duration );
        _p.instance.position.y = _p.transition( _time, _p.position.start.y, _p.position.target.y - _p.position.start.y, _p.duration );
        _p.instance.position.z = _p.transition( _time, _p.position.start.z, _p.position.target.z - _p.position.start.z, _p.duration );
      }
      if( _p.rotation )
      {
        _p.instance.rotation.x = _p.transition( _time, _p.rotation.start.x, _p.rotation.target.x - _p.rotation.start.x, _p.duration );
        _p.instance.rotation.y = _p.transition( _time, _p.rotation.start.y, _p.rotation.target.y - _p.rotation.start.y, _p.duration );
        _p.instance.rotation.z = _p.transition( _time, _p.rotation.start.z, _p.rotation.target.z - _p.rotation.start.z, _p.duration );
      }
      if( _p.scale )
      {
        _p.instance.scale.x = _p.transition( _time, _p.scale.start.x, _p.scale.target.x - _p.scale.start.x, _p.duration );
        _p.instance.scale.y = _p.transition( _time, _p.scale.start.y, _p.scale.target.y - _p.scale.start.y, _p.duration );
        _p.instance.scale.z = _p.transition( _time, _p.scale.start.z, _p.scale.target.z - _p.scale.start.z, _p.duration );
      }

      //  color, opacity はまとめられないかな？いい方法ないかな？  
      if( _p.color )
      {
        _p.instance.material.color.r = _p.transition( _time, _p.color.start.r, _p.color.target.r - _p.color.start.r, _p.duration );
        _p.instance.material.color.g = _p.transition( _time, _p.color.start.g, _p.color.target.g - _p.color.start.g, _p.duration );
        _p.instance.material.color.b = _p.transition( _time, _p.color.start.b, _p.color.target.b - _p.color.start.b, _p.duration );
      }
      if( _p.opacity )
      {
        _p.instance.material.opacity = _p.transition( _time, _p.opacity.start, _p.opacity.target - _p.opacity.start, _p.duration );
      }

    } else {
      Tweener.removeTween( _p.instance );

      //  pos, rot, sca はまとめられないかな？
      if( _p.position )
      {
        _p.instance.position.x = _p.position.target.x;
        _p.instance.position.y = _p.position.target.y;
        _p.instance.position.z = _p.position.target.z;
      }
      if( _p.rotation )
      {
        _p.instance.rotation.x = _p.rotation.target.x;
        _p.instance.rotation.y = _p.rotation.target.y;
        _p.instance.rotation.z = _p.rotation.target.z;
      }
      if( _p.scale )
      {
        _p.instance.scale.x = _p.scale.target.x;
        _p.instance.scale.y = _p.scale.target.y;
        _p.instance.scale.z = _p.scale.target.z;
      }

      //  color, opacity はまとめられないかな？いい方法ないかな？  
      if( _p.color )
      {
        _p.instance.material.color.r = _p.color.target.r;
        _p.instance.material.color.g = _p.color.target.g;
        _p.instance.material.color.b = _p.color.target.b;
      }
      if( _p.opacity )
      {
        _p.instance.material.opacity = _p.opacity.target;
      }


      if( _p.onComplete != undefined )
      {
        _p.onComplete( _p.instance );
      }
    }
  }
}




/*
  method
*/
Tweener.linear = (t,b,c,d) =>
{
  return c*t/d + b;
}

//  QUAD
Tweener.easeInQuad = (t,b,c,d) =>
{
  return c*(t/=d)*t + b;
}

Tweener.easeOutQuad = (t,b,c,d) =>
{
  return -c *(t/=d)*(t-2) + b;
}

Tweener.easeInOutQuad = (t,b,c,d) =>
{
  if ((t/=d/2) < 1) return c/2*t*t + b;
  return -c/2 * ((--t)*(t-2) - 1) + b;
}

Tweener.easeOutInQuad = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutQuad (t*2, b, c/2, d);
  return Tweener.easeInQuad((t*2)-d, b+c/2, c/2, d);
}

//  CUBIC
Tweener.easeInCubic = (t,b,c,d) =>
{
  return c*(t/=d)*t*t + b;
}

Tweener.easeOutCubic = (t,b,c,d) =>
{
  return c*((t=t/d-1)*t*t + 1) + b;
}

Tweener.easeInOutCubic = (t,b,c,d) =>
{
  if ((t/=d/2) < 1) return c/2*t*t*t + b;
  return c/2*((t-=2)*t*t + 2) + b;
}

Tweener.easeOutInCubic = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutCubic (t*2, b, c/2, d);
  return Tweener.easeInCubic((t*2)-d, b+c/2, c/2, d);
}

//  QUART
Tweener.easeInQuart = (t,b,c,d) =>
{
  return c*(t/=d)*t*t*t + b;
}

Tweener.easeOutQuart = (t,b,c,d) =>
{
  return -c * ((t=t/d-1)*t*t*t - 1) + b;
}

Tweener.easeInOutQuart = (t,b,c,d) =>
{
  if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
  return -c/2 * ((t-=2)*t*t*t - 2) + b
}

Tweener.easeOutInQuart = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutQuart (t*2, b, c/2, d);
  return Tweener.easeInQuart((t*2)-d, b+c/2, c/2, d);
}

//  QUINT
Tweener.easeInQuint = (t,b,c,d) =>
{
  return c*(t/=d)*t*t*t*t + b;
}

Tweener.easeOutQuint = (t,b,c,d) =>
{
  return c*((t=t/d-1)*t*t*t*t + 1) + b;
}

Tweener.easeInOutQuint = (t,b,c,d) =>
{
  if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
  return c/2*((t-=2)*t*t*t*t + 2) + b;
}

Tweener.easeOutInQuint = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutQuint (t*2, b, c/2, d);
  return Tweener.easeInQuint((t*2)-d, b+c/2, c/2, d);
}

//  SINE
Tweener.easeInSine = (t,b,c,d) =>
{
  return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
}

Tweener.easeOutSine = (t,b,c,d) =>
{
  return c * Math.sin(t/d * (Math.PI/2)) + b;
}

Tweener.easeInOutSine = (t,b,c,d) =>
{
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}

Tweener.easeOutInSine = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutSine (t*2, b, c/2, d);
  return Tweener.easeInSine((t*2)-d, b+c/2, c/2, d);
}

//  EXPO
Tweener.easeInExpo = (t,b,c,d) =>
{
  return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b - c * 0.001;
}

Tweener.easeOutExpo = (t,b,c,d) =>
{
  return (t==d) ? b+c : c * 1.001 * (-Math.pow(2, -10 * t/d) + 1) + b;
}

Tweener.easeInOutExpo = (t,b,c,d) =>
{
  if (t==0) return b;
  if (t==d) return b+c;
  if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b - c * 0.0005;
  return c/2 * 1.0005 * (-Math.pow(2, -10 * --t) + 2) + b;
}

Tweener.easeOutInExpo = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutExpo (t*2, b, c/2, d);
  return Tweener.easeInExpo((t*2)-d, b+c/2, c/2, d);
}

//  CIRC
Tweener.easeInCirc = (t,b,c,d) =>
{
  return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
}

Tweener.easeOutCirc = (t,b,c,d) =>
{
  return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
}

Tweener.easeInOutCirc = (t,b,c,d) =>
{
  if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
  return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
}

Tweener.easeOutInCirc = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutCirc (t*2, b, c/2, d);
  return Tweener.easeInCirc((t*2)-d, b+c/2, c/2, d);
}

//  ELASTIC
Tweener.easeInElastic = (t,b,c,d) =>
{
  if (t==0) return b;
  if ((t/=d)==1) return b+c;
  let p = d*.3;
  let s;
  let a = 0;
  if (!Boolean(a) || a < Math.abs(c)) {
    a = c;
    s = p/4;
  } else {
    s = p/(2*Math.PI) * Math.asin (c/a);
  }
  return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
}

Tweener.easeOutElastic = (t,b,c,d) =>
{
  if (t==0) return b;
  if ((t/=d)==1) return b+c;
  let p = d*.3;
  let s;
  let a = 0;
  if (!Boolean(a) || a < Math.abs(c)) {
    a = c;
    s = p/4;
  } else {
    s = p/(2*Math.PI) * Math.asin (c/a);
  }
  return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
}

Tweener.easeInOutElastic = (t,b,c,d) =>
{
  if (t==0) return b;
  if ((t/=d/2)==2) return b+c;
  let p = d*(.3*1.5);
  let s;
  let a = 0;
  if (!Boolean(a) || a < Math.abs(c)) {
    a = c;
    s = p/4;
  } else {
    s = p/(2*Math.PI) * Math.asin (c/a);
  }
  if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
}

Tweener.easeOutInElastic = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutElastic (t*2, b, c/2, d);
  return Tweener.easeInElastic((t*2)-d, b+c/2, c/2, d);
}

//  BACK
Tweener.easeInBack = (t,b,c,d) =>
{
  let s = 1.70158;
  return c*(t/=d)*t*((s+1)*t - s) + b;
}

Tweener.easeOutBack = (t,b,c,d) =>
{
  let s = 1.70158;
  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
}

Tweener.easeInOutBack = (t,b,c,d) =>
{
  let s = 1.70158;
  if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
  return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
}

Tweener.easeOutInBack = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutBack (t*2, b, c/2, d);
  return Tweener.easeInBack((t*2)-d, b+c/2, c/2, d);
}

//  BOUNCE
Tweener.easeInBounce = (t,b,c,d) =>
{
  return c - Tweener.easeOutBounce (d-t, 0, c, d) + b;
}

Tweener.easeOutBounce = (t,b,c,d) =>
{
  if ((t/=d) < (1/2.75)) {
    return c*(7.5625*t*t) + b;
  } else if (t < (2/2.75)) {
    return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
  } else if (t < (2.5/2.75)) {
    return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
  } else {
    return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
  }
}

Tweener.easeInOutBounce = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeInBounce (t*2, 0, c, d) * .5 + b;
  else return Tweener.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
}

Tweener.easeOutInBounce = (t,b,c,d) =>
{
  if (t < d/2) return Tweener.easeOutBounce (t*2, b, c/2, d);
  return Tweener.easeInBounce((t*2)-d, b+c/2, c/2, d);
}