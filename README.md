gimmevents
---
by [@michalbe](http://github.com/michalbe)


## API
### Emitter
```
const gimmevents = new Gimmevents.Emitter({
	key: key,
	host: host
});

gimmevents.register(event);
```

### RECEIVER
```
const gimmevents = new Gimmevents.Receiver({
	key: key,
	host: host
});

gimmevents.on(event, (e) => {
 // Handler
});
```

## EVENTS

  - keyup
  - keydown
  - keypress
  - mousemove
  - mouseup
  - mousedown

## Development

```
git clone git@github.com:michalbe/gimmevents.git
cd gimmevents
npm i
npm run dev
```

then open [localhost:7100/emitter.html](http://localhost:7100/emitter.html) in one browser and [localhost:7100/receiver.html](http://localhost:7100/receiver.html) in another. Demo listened to all the keys pressed in one window and sends them to another.
