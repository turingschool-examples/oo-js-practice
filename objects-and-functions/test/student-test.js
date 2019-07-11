var assert = require('chai').assert;
var Student = require('../lib/student');

describe('Student', function() {

  it('should be a function', function() {
    assert.isFunction(Student);
  });

  it('should have a name', function() {
    var student = new Student({name: "Morgan", age: 21});

    assert.equal(student.name, "Morgan");
  });

  it('should have an age', function() {
    var student = new Student({name: "Morgan", age: 21});

    assert.equal(student.age, 21);
  });

  it('should start with no scores', function() {
    var student = new Student({name: "Morgan", age: 21});

    assert.deepEqual(student.scores, []);
  });

  it('should be able to log scores', function() {
    var student = new Student({name: "Morgan", age: 21});

    student.logScore(88);
    student.logScore(74);

    assert.deepEqual(student.scores, [88, 74]);
  });

  it('should calculate average score', function() {
    var student = new Student({name: "Morgan", age: 21});

    student.logScore(88);
    student.logScore(74);

    assert.equal(student.averageGrade, 81);
  });

});
