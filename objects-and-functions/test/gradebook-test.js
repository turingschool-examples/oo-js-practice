var assert = require('chai').assert;
var GradeBook = require('../lib/gradebook');

describe('GradeBook', function() {

  it('should be a function', function() {
    assert.isFunction(GradeBook);
  });

  it('should have an instructor', function() {
    var bio = new Course("Bio", 3);
    var gradebook = new GradeBook('Ms. Frizzle', bio);

    assert.equal(gradebook.instructor, 'Ms. Frizzle');
  });

  it('should have aa course', function() {
    var bio = new Course("Bio", 3);
    var gradebook = new GradeBook('Ms. Frizzle', bio);

    assert.equal(gradebook.course, bio);
    assert.isObject(gradebook.course);
  });

  it('should can calculate class average', function() {
    var morgan = new Student({name: "Morgan", age: 21});
    var hillary = new Student({name: "Hillary", age: 29});
    var archie = new Student({name: "Archie", age: 27});

    morgan.logScore(90);
    hillary.logScore(80);
    archie.logScore(70);

    var bio = new Course("Bio", 3);

    bio.enroll(morgan);
    bio.enroll(hillary);
    bio.enroll(archie);

    var gradebook = new GradeBook('Ms. Frizzle', bio);

    assert.equal(gradebook.calcClassAverage(), 80);
  });

  it('should can list all passing students', function() {
    // note: passing is considered as 60 average or higher
    var morgan = new Student({name: "Morgan", age: 21});
    var hillary = new Student({name: "Hillary", age: 29});
    var archie = new Student({name: "Archie", age: 27});

    morgan.logScore(90);
    morgan.logScore(80);
    hillary.logScore(70);
    hillary.logScore(40);
    archie.logScore(70);
    archie.logScore(60);

    var bio = new Course("Bio", 3);

    bio.enroll(morgan);
    bio.enroll(hillary);
    bio.enroll(archie);

    var gradebook = new GradeBook('Ms. Frizzle', bio);

    assert.deepEqual(gradebook.listPassingStudents(), [morgan, archie]);
  });

});
