# Tweener
> with THREE.js

## sample

Tweener.init();

Tweener.addTween( _mesh,
{
  position: new THREE.Vector3( _px, _py, _pz  ),
  rotation: new THREE.Vector3( _rx, _ry, _rz ),
  scale: new THREE.Vector3( _scale, _scale, _scale ),
  color: new THREE.Color( _r, _g, _b ),
  opacity: _opacity,
  transition: 'easeInOutExpo',
  duration: _duration_sec-float,
  delay: _delay_sec-float,
  onComplete: (e) => {
    console.log( 'static.');
  }
});


## Method

***Tweener.init();***

全ての状態の初期化。  
コンテンツ中にTwennerを使う前に一度使用。

***Tweener.dispose();***

全ての状態の破棄。  
Twenner を終了させる（使用しない）時に使用。

***Tweener.addTween( _instance:Object3D, props:Object );***

Tweenの追加と自動実行

props
  position: THREE.Vector3  
  rotation: THREE.Vector3  
  scale: THREE.Vector3
  color: THREE.Color  
  opacity: Float  
  transition: String  
  duration: Float
  delay: Float
  onComplete: Function (CALLBACK)  
  

***Tweener.removeTween( _instance:Object3D );***

指定したObject3DにかかわるTweenを削除

***Tweener.clearAllTweens();***

実行中の全てのTweenを削除する

***Tweener.pauseTween( _instance:Object3D );***

指定したObject3DにかかわるTweenを停止する

***Tweener.playTween( _instance:Object3D );***

指定したObject3Dに関わるTweenを再開する

***Tweener.pauseAllTweens();***

全てのTweenを停止する

***Tweener.playAllTweens();***

全てのTweenを再開する



