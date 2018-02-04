gimmevents
---
by @michalbe


## API SCHEMA

### SENDER
```
const gimmevents = new Gimmevents({
	key: key,
	host: host
});

gimmevents.register('event');
```

### RECEIVER
```
const gimmevents = new Gimmevents({
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