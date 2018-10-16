require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.destroy_all

yellow_lab = Dog.create(name: 'Yellow Lab', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: '2713 Folsom St.',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.754031, lng: -122.413923)

yellow_lab_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/yellow-lab/yellow-lab-one.jpg")
yellow_lab_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/yellow-lab/yellow-lab-two.jpg")
yellow_lab_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/yellow-lab/yellow-lab-three.jpg")

yellow_lab.photos.attach(io: yellow_lab_photo_one, filename: 'yellow-lab-one.jpg')
yellow_lab.photos.attach(io: yellow_lab_photo_two, filename: 'yellow-lab-two.jpg')
yellow_lab.photos.attach(io: yellow_lab_photo_three, filename: 'yellow-lab-three.jpg')

black_lab = Dog.create(name: 'Black Lab', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Mission Dolores Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.759863, lng: -122.426925)

black_lab_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/black-lab/black-lab-one.jpg")
black_lab_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/black-lab/black-lab-two.jpg")
black_lab_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/black-lab/black-lab-three.jpg")

black_lab.photos.attach(io: black_lab_photo_one, filename: 'black-lab-one.jpg')
black_lab.photos.attach(io: black_lab_photo_two, filename: 'black-lab-two.jpg')
black_lab.photos.attach(io: black_lab_photo_three, filename: 'black-lab-three.jpg')

husky = Dog.create(name: 'Siberian Husky', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Bernal Heights Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.743838, lng: -122.414094)

husky_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/husky/husky-one.jpg")
husky_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/husky/husky-two.jpg")
husky_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/husky/husky-three.jpg")

husky.photos.attach(io: husky_photo_one, filename: 'husky-one.jpg')
husky.photos.attach(io: husky_photo_two, filename: 'husky-two.jpg')
husky.photos.attach(io: husky_photo_three, filename: 'husky-three.jpg')

golden_retriever = Dog.create(name: 'Golden Retriever', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Precita Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.748067, lng: -122.412120)

golden_retriever_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/golden-retriever/golden-retriever-one.jpg")
golden_retriever_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/golden-retriever/golden-retriever-two.jpg")
golden_retriever_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/golden-retriever/golden-retriever-three.jpg")

golden_retriever.photos.attach(io: golden_retriever_photo_one, filename: 'golden-retriever-one.jpg')
golden_retriever.photos.attach(io: golden_retriever_photo_two, filename: 'golden-retriever-two.jpg')
golden_retriever.photos.attach(io: golden_retriever_photo_three, filename: 'golden-retriever-three.jpg')

Type.destroy_all

sporting = Type.create(name: 'Sporting')
lab = Type.create(name: 'Labrador Retriever')
working = Type.create(name: 'Working')
huskyType = Type.create(name: 'Husky')

DogType.create(dog_id: yellow_lab.id, type_id: sporting.id)
DogType.create(dog_id: yellow_lab.id, type_id: lab.id)

DogType.create(dog_id: black_lab.id, type_id: sporting.id)
DogType.create(dog_id: black_lab.id, type_id: lab.id)

DogType.create(dog_id: husky.id, type_id: working.id)
DogType.create(dog_id: husky.id, type_id: huskyType.id)

DogType.create(dog_id: golden_retriever.id, type_id: sporting.id)

User.destroy_all

User.create(first_name: 'Albus', last_name: 'Dumbledore', email: 'albus@hogwarts.magic',
password: 'password', zipcode: '94110')
User.create(first_name: 'Tyler', last_name: 'Allen', email: 'tylerthomasallen@gmail.com',
password: 'password', zipcode: '94110')

10.times do
  name = Faker::HarryPotter.unique.character.split(' ');
  first = name.first;
  last = name.last;
  User.create(
    first_name: first,
    last_name: last,
    email: first + '@hogwarts.magic',
    password: 'password',
    zipcode: '94110',
    state: Faker::Address.state_abbr,
    city: Faker::Address.city
  )
end

10.times do
  Review.create(
    body: Faker::HarryPotter.unique.quote,
    rating: Random.rand(1..5),
    user_id: Random.rand(1..12),
    dog_id: 1
  )
end

10.times do
  Review.create(
    body: Faker::StarWars.unique.quote,
    rating: Random.rand(1..5),
    user_id: Random.rand(1..12),
    dog_id: 2
  )
end

10.times do
  Review.create(
    body: Faker::ChuckNorris.unique.fact,
    rating: Random.rand(1..5),
    user_id: Random.rand(1..12),
    dog_id: 3
  )
end

10.times do
  Review.create(
    body: Faker::GreekPhilosophers.unique.quote,
    rating: Random.rand(1..5),
    user_id: Random.rand(1..12),
    dog_id: 4
  )
end
