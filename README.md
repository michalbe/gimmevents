gimmevents
---
by @michalbe


## API SCHEMA

### Emitter
```
const gimmevents = new Gimmevents.Emitter({
	key: key,
	host: host
});

gimmevents.register('event');
```

### RECEIVER
```
const gimmevents = new Gimmevents.Receiver({
	key: key,
	host: host
});

gimmevents.on('event', (e) => {
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
