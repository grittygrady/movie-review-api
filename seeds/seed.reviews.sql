TRUNCATE reviews RESTART IDENTITY CASCADE;

INSERT INTO reviews (id, title, rating, author, body)
  VALUES
    (1, 'Fight Club', 5, 'Candice', 'Review for Fight Club goes here'),
    (2, 'Inception', 4, 'Digi', 'Review for Inception goes here'),
    (3, 'Inside Out', 5, 'Grady', 'Review for Inside Out, best movie ever!');