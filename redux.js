Redux interview questions
=========================
What is RxJS?
  //RxJS is a javascript library that brings the concept of "reactive programming" to the web.

    RxJs is javascript implementation of reactive x. 
    Reactive x is an API for asynchronous programming with observable streams.
    reactivex.io is the official site for languages like java, javascript.


    const observable = Rx.Observable.create(observer => {
      observer.next('hello');
      observer.next('world');
    })

    observable.subscribe(val => print(val))

    const clicks = Rx.Observable.fromEvent(document,'click')
    clicks.subscribe(click => console.log(click))

https://www.youtube.com/watch?v=2LCo926NFLI
