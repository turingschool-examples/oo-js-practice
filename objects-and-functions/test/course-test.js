var assert = require('chai').assert;
var Course = require('../lib/course');
var Student = require('../lib/student');

describe('Course', function() {

  it('should be a function', function() {
    assert.isFunction(Course);
  });

  it('should have a name', function() {
    var course = new Course("Bio", 3);
    assert.equal(course.name, "Bio");
  });

  it('should have a capacity', function() {
    var course = new Course("Bio", 3);
    assert.equal(course.capacity, 3);
  });

  it('should have a list of enrolled students', function() {
    var course = new Course("Bio", 3);
    assert.deepEqual(course.students, []);
  });

  it('should be able to check if fully enrolled', function() {
    var course = new Course("Bio", 3);

    assert.equal(course.fullyEnrolled, false);
  });

  it('should update list of students', function() {
    var course = new Course("Bio", 3);
    var morgan = new Student({name: "Morgan", age: 21});
    var hillary = new Student({name: "Hillary", age: 29});
    var archie = new Student({name: "Archie", age: 27});

    course.enroll(morgan);
    course.enroll(hillary);
    course.enroll(archie);
    assert.deepEqual(course.students, [morgan, hillary, archie]);
  });

  it('should enroll students', function() {
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
