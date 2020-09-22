
DROP DATABASE IF EXISTS quizApp;
CREATE DATABASE quizApp;

USE quizApp;

insert into Questions
    (question,choices,answer)
values('Which of the following is not a reserved word in JavaScript?', 'interface:throws:program:short ','program');

insert into Questions
    (question,choices,answer,createdAt,updatedAt)
values('Which of the following is not a reserved word in JavaScript?', 'interface:throws:program:short ','program','2020-01-06 20:34:38', '2020-01-06 20:34:38');


insert into Questions
    (question,choices,answer,createdAt,updatedAt)
values('Select the appropriate HTML tag for inserting a line break?', 'lb:br:brbr:break ','br','2020-01-06 20:34:38', '2020-01-06 20:34:38');



insert into Questions
    (question,choices,answer,createdAt,updatedAt)
values('Select the appropriate HTML tag used for the largest heading?', 'Head:Heading:H6:H1','H1','2020-01-06 20:34:38', '2020-01-06 20:34:38');


insert into Questions
    (question,choices,answer,createdAt,updatedAt)
values('Which tool can you use to ensure code quality?', 'Angular:JQuery:RequireJS:ESLint','ESLint','2020-01-06 20:34:38', '2020-01-06 20:34:38');