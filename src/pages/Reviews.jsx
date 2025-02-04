import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John D.',
      rating: 5,
      comment: 'This app is amazing! Found so many great breweries in my area that I never knew existed.',
    },
    {
      id: 2,
      name: 'Sarah L.',
      rating: 4,
      comment: 'Love the map feature! It made planning my brewery tour so easy.',
    },
    {
      id: 3,
      name: 'Mike T.',
      rating: 5,
      comment: 'A must-have for any beer lover. Highly recommend!',
    },
    {
      id: 4,
      name: 'Emily R.',
      rating: 4,
      comment: 'Great app, but I wish it had more filters for searching.',
    },
  ];
  
  return (
    <main>
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>What Our Users Are Saying</h1>
      <div>
        {reviews.map((review) => (
          <div key={review.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{review.name}</h3>
            <p>
              <strong>Rating:</strong> {review.rating}/5
            </p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
    </main>
  );
};

export default Reviews;