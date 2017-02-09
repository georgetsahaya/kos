'use strict';

class KineticObject {
  constructor(key, value) {
    this.key = key
    this.value = value
	this.tags = new Set
  }
  tag(x) { 
	this.tags.add(x) 
	return this
  }
}

module.exports = KineticObject