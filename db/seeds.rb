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

bernese = Dog.create(name: 'Bernese Mountain Dog', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'AT&T Park', large: true,
  zip_code: '94107', state: 'CA', city: 'San Francisco', lat: 37.780537, lng: -122.389133)

bernese_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/bernese/bernese-one.jpg")
bernese_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/bernese/bernese-two.jpg")
bernese_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/bernese/bernese-three.jpg")

bernese.photos.attach(io: bernese_photo_one, filename: 'bernese-one.jpg')
bernese.photos.attach(io: bernese_photo_two, filename: 'bernese-two.jpg')
bernese.photos.attach(io: bernese_photo_three, filename: 'bernese-three.jpg')

newf = Dog.create(name: 'Newfoundland', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Corona Heights Park', large: true,
  zip_code: '94114', state: 'CA', city: 'San Francisco', lat: 37.768126, lng: -122.435963)

newf_photo_one = File.open("/Users/tylerallen/Desktop/Photos/dogs/newf/newf-one.jpg")
newf_photo_two = File.open("/Users/tylerallen/Desktop/Photos/dogs/newf/newf-two.jpg")
newf_photo_three = File.open("/Users/tylerallen/Desktop/Photos/dogs/newf/newf-three.jpg")

newf.photos.attach(io: newf_photo_one, filename: 'newf-one.jpg')
newf.photos.attach(io: newf_photo_two, filename: 'newf-two.jpg')
newf.photos.attach(io: newf_photo_three, filename: 'newf-three.jpg')

Type.destroy_all

sporting = Type.create(name: 'Sporting')
working = Type.create(name: 'Working')

DogType.create(dog_id: yellow_lab.id, type_id: sporting.id)

DogType.create(dog_id: black_lab.id, type_id: sporting.id)

DogType.create(dog_id: husky.id, type_id: working.id)

DogType.create(dog_id: golden_retriever.id, type_id: sporting.id)

DogType.create(dog_id: bernese.id, type_id: working.id)

DogType.create(dog_id: newf.id, type_id: working.id)


User.destroy_all

dumbledore = User.create(first_name: 'Albus', last_name: 'Dumbledore', email: 'albus@hogwarts.magic',
password: 'password', zipcode: '94110')

harry = User.create(first_name: 'Harry', last_name: 'Potter', email: 'harry@hogwarts.magic',
password: 'password', zipcode: '94110')

hermione = User.create(first_name: 'Hermione', last_name: 'Granger', email: 'hermione@hogwarts.magic',
password: 'password', zipcode: '94110')

tyler = User.create(first_name: 'Tyler', last_name: 'Allen', email: 'tylerthomasallen@gmail.com',
password: 'password', zipcode: '94110')

ron = User.create(first_name: 'Ron', last_name: 'Weasley', email: 'ron@hogwarts.magic',
password: 'password', zipcode: '94110')

draco = User.create(first_name: 'Draco', last_name: 'Malfoy', email: 'draco@hogwarts.magic',
password: 'password', zipcode: '94110')

hagrid = User.create(first_name: 'Rubeus', last_name: 'Hagrid', email: 'hagrid@hogwarts.magic',
password: 'password', zipcode: '94110')

snape = User.create(first_name: 'Severus', last_name: 'Snape', email: 'snape@hogwarts.magic',
password: 'password', zipcode: '94110')

sirius = User.create(first_name: 'Sirius', last_name: 'Black', email: 'sirius@hogwarts.magic',
password: 'password', zipcode: '94110')

lord = User.create(first_name: 'Lord', last_name: 'Voldemort', email: 'lord@hogwarts.magic',
password: 'password', zipcode: '94110')



dumbledore_photo = File.open("/Users/tylerallen/Desktop/Photos/users/dumbledore.jpg")
dumbledore.photo.attach(io: dumbledore_photo, filename: 'dumbledore.jpg')

harry_photo = File.open("/Users/tylerallen/Desktop/Photos/users/harry.jpg")
harry.photo.attach(io: harry_photo, filename: 'harry.jpg')

hermione_photo = File.open("/Users/tylerallen/Desktop/Photos/users/hermione.jpg")
hermione.photo.attach(io: hermione_photo, filename: 'hermione.jpg')

tyler_photo = File.open("/Users/tylerallen/Desktop/Photos/users/tyler.jpg")
tyler.photo.attach(io: tyler_photo, filename: 'tyler.jpg')

ron_photo = File.open("/Users/tylerallen/Desktop/Photos/users/ron.jpg")
ron.photo.attach(io: ron_photo, filename: 'ron.jpg')

draco_photo = File.open("/Users/tylerallen/Desktop/Photos/users/draco.jpg")
draco.photo.attach(io: draco_photo, filename: 'draco.jpg')

hagrid_photo = File.open("/Users/tylerallen/Desktop/Photos/users/hagrid.jpg")
hagrid.photo.attach(io: hagrid_photo, filename: 'hagrid.jpg')

snape_photo = File.open("/Users/tylerallen/Desktop/Photos/users/snape.jpg")
snape.photo.attach(io: snape_photo, filename: 'snape.jpg')

sirius_photo = File.open("/Users/tylerallen/Desktop/Photos/users/sirius.jpg")
sirius.photo.attach(io: sirius_photo, filename: 'sirius.jpg')

lord_photo = File.open("/Users/tylerallen/Desktop/Photos/users/lord.jpg")
lord.photo.attach(io: lord_photo, filename: 'lord.jpg')

# 10.times do
#   name = Faker::HarryPotter.unique.character.split(' ');
#   first = name.first;
#   last = name.last;
#   User.create(
#     first_name: first,
#     last_name: last,
#     email: first + '@hogwarts.magic',
#     password: 'password',
#     zipcode: '94110',
#     state: Faker::Address.state_abbr,
#     city: Faker::Address.city
#   )
# end

i = 0

Review.destroy_all

while i <= 10
  fake_body = "#{Faker::HarryPotter.unique.quote}" + " " + "#{Faker::StarWars.unique.quote}"
  + " " + "#{Faker::ChuckNorris.unique.fact}" + " " + "#{Faker::GreekPhilosophers.unique.quote}"

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 1
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 2
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 3
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 4
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 5
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 6
  )

  i += 1
end

# 10.times do
#   Review.create(
#     body: Faker::HarryPotter.unique.quote,
#     rating: Random.rand(1..5),
#     user_id: Random.rand(1..4),
#     dog_id: 1
#   )
# end

# 10.times do
#   Review.create(
#     body: Faker::StarWars.unique.quote,
#     rating: Random.rand(1..5),
#     user_id: Random.rand(1..4),
#     dog_id: 2
#   )
# end

# 10.times do
#   Review.create(
#     body: Faker::ChuckNorris.unique.fact,
#     rating: Random.rand(1..5),
#     user_id: Random.rand(1..4),
#     dog_id: 3
#   )
# end

# 10.times do
#   Review.create(
#     body: Faker::GreekPhilosophers.unique.quote,
#     rating: Random.rand(1..5),
#     user_id: Random.rand(1..4),
#     dog_id: 4
#   )
# end
