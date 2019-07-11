var assert = require('chai').assert;
var Course = require('../lib/course');

describe('Course', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Course);
  });

  it.skip('should have a name', function() {
    var course = new Course("Bio", 3);

    assert.equal(course.name, "Bio");
  });

  it.skip('should have a capacity', function() {
    var course = new Course("Bio", 3);

    assert.equal(course.capacity, 3);
  });

  it.skip('should have a list of enrolled students', function() {
    var course = new Course("Bio", 3);

    assert.deepEqual(course.students, []);
  });

  it.skip('should be able to check if fully enrolled', function() {
    var course = new Course("Bio", 3);

    assert.equal(course.fullyEnrolled, false);
  });

  it.skip('should update list of students', function() {
    var course = new Course("Bio", 3);
    var morgan = new Student({name: "Morgan", age: 21});
    var hillary = new Student({name: "Hillary", age: 29});
    var archie = new Student({name: "Archie", age: 27});

    course.enroll(morgan);
    course.enroll(hillary);
    course.enroll(archie);
    assert.deepEqual(course.students, [morgan, hillary, archie]);
  });

  it.skip('should enroll students', function() {
    var course = new Course("Bio", 3);
    var morgan = new Student({name: "Morgan", age: 21});
    var hillary = new Student({name: "Hillary", age: 29});
    var archie = new Student({name: "Archie", age: 27});

    course.enroll(morgan);
    course.enroll(hillary);
    course.enroll(archie);
    assert.equal(course.fullyEnrolled, true);
  });

});
