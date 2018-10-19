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

yellow_lab_photo_one = File.open("app/assets/images/photos/dogs/yellow-lab/yellow-lab-one.jpg")
yellow_lab_photo_two = File.open("app/assets/images/photos/dogs/yellow-lab/yellow-lab-two.jpg")
yellow_lab_photo_three = File.open("app/assets/images/photos/dogs/yellow-lab/yellow-lab-three.jpg")

yellow_lab.photos.attach(io: yellow_lab_photo_one, filename: 'yellow-lab-one.jpg')
yellow_lab.photos.attach(io: yellow_lab_photo_two, filename: 'yellow-lab-two.jpg')
yellow_lab.photos.attach(io: yellow_lab_photo_three, filename: 'yellow-lab-three.jpg')

black_lab = Dog.create(name: 'Black Lab', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Mission Dolores Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.759863, lng: -122.426925)

black_lab_photo_one = File.open("app/assets/images/photos/dogs/black-lab/black-lab-one.jpg")
black_lab_photo_two = File.open("app/assets/images/photos/dogs/black-lab/black-lab-two.jpg")
black_lab_photo_three = File.open("app/assets/images/photos/dogs/black-lab/black-lab-three.jpg")

black_lab.photos.attach(io: black_lab_photo_one, filename: 'black-lab-one.jpg')
black_lab.photos.attach(io: black_lab_photo_two, filename: 'black-lab-two.jpg')
black_lab.photos.attach(io: black_lab_photo_three, filename: 'black-lab-three.jpg')

husky = Dog.create(name: 'Siberian Husky', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Bernal Heights Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.743838, lng: -122.414094)

husky_photo_one = File.open("app/assets/images/photos/dogs/husky/husky-one.jpg")
husky_photo_two = File.open("app/assets/images/photos/dogs/husky/husky-two.jpg")
husky_photo_three = File.open("app/assets/images/photos/dogs/husky/husky-three.jpg")

husky.photos.attach(io: husky_photo_one, filename: 'husky-one.jpg')
husky.photos.attach(io: husky_photo_two, filename: 'husky-two.jpg')
husky.photos.attach(io: husky_photo_three, filename: 'husky-three.jpg')

golden_retriever = Dog.create(name: 'Golden Retriever', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Precita Park',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.748067, lng: -122.412120)

golden_retriever_photo_one = File.open("app/assets/images/photos/dogs/golden-retriever/golden-retriever-one.jpg")
golden_retriever_photo_two = File.open("app/assets/images/photos/dogs/golden-retriever/golden-retriever-two.jpg")
golden_retriever_photo_three = File.open("app/assets/images/photos/dogs/golden-retriever/golden-retriever-three.jpg")

golden_retriever.photos.attach(io: golden_retriever_photo_one, filename: 'golden-retriever-one.jpg')
golden_retriever.photos.attach(io: golden_retriever_photo_two, filename: 'golden-retriever-two.jpg')
golden_retriever.photos.attach(io: golden_retriever_photo_three, filename: 'golden-retriever-three.jpg')

bernese = Dog.create(name: 'Bernese Mountain Dog', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'AT&T Park', large: true,
  zip_code: '94107', state: 'CA', city: 'San Francisco', lat: 37.780537, lng: -122.389133)

bernese_photo_one = File.open("app/assets/images/photos/dogs/bernese/bernese-one.jpg")
bernese_photo_two = File.open("app/assets/images/photos/dogs/bernese/bernese-two.jpg")
bernese_photo_three = File.open("app/assets/images/photos/dogs/bernese/bernese-three.jpg")

bernese.photos.attach(io: bernese_photo_one, filename: 'bernese-one.jpg')
bernese.photos.attach(io: bernese_photo_two, filename: 'bernese-two.jpg')
bernese.photos.attach(io: bernese_photo_three, filename: 'bernese-three.jpg')

newf = Dog.create(name: 'Newfoundland', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Corona Heights Park', large: true,
  zip_code: '94114', state: 'CA', city: 'San Francisco', lat: 37.768126, lng: -122.435963)

newf_photo_one = File.open("app/assets/images/photos/dogs/newf/newf-one.jpg")
newf_photo_two = File.open("app/assets/images/photos/dogs/newf/newf-two.jpg")
newf_photo_three = File.open("app/assets/images/photos/dogs/newf/newf-three.jpg")

newf.photos.attach(io: newf_photo_one, filename: 'newf-one.jpg')
newf.photos.attach(io: newf_photo_two, filename: 'newf-two.jpg')
newf.photos.attach(io: newf_photo_three, filename: 'newf-three.jpg')

akita = Dog.create(name: 'Akita', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Franklin Square', small: true,
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.765699, lng: -122.409290)

akita_photo_one = File.open("app/assets/images/photos/dogs/akita/akita-one.jpg")
akita_photo_two = File.open("app/assets/images/photos/dogs/akita/akita-two.jpg")
akita_photo_three = File.open("app/assets/images/photos/dogs/akita/akita-three.jpg")

akita.photos.attach(io: akita_photo_one, filename: 'akita-one.jpg')
akita.photos.attach(io: akita_photo_two, filename: 'akita-two.jpg')
akita.photos.attach(io: akita_photo_three, filename: 'akita-three.jpg')

cocker = Dog.create(name: 'Cocker Spaniel', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Mt. Davidson', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.741269, lng: -122.453493)

cocker_photo_one = File.open("app/assets/images/photos/dogs/cocker/cocker-one.jpg")
cocker_photo_two = File.open("app/assets/images/photos/dogs/cocker/cocker-two.jpg")
cocker_photo_three = File.open("app/assets/images/photos/dogs/cocker/cocker-three.jpg")

cocker.photos.attach(io: cocker_photo_one, filename: 'cocker-one.jpg')
cocker.photos.attach(io: cocker_photo_two, filename: 'cocker-two.jpg')
cocker.photos.attach(io: cocker_photo_three, filename: 'cocker-three.jpg')

beagle = Dog.create(name: 'Beagle', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Lake Merced Park', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.724496, lng: -122.494695)

beagle_photo_one = File.open("app/assets/images/photos/dogs/beagle/beagle-one.jpg")
beagle_photo_two = File.open("app/assets/images/photos/dogs/beagle/beagle-two.jpg")
beagle_photo_three = File.open("app/assets/images/photos/dogs/beagle/beagle-three.jpg")

beagle.photos.attach(io: beagle_photo_one, filename: 'beagle-one.jpg')
beagle.photos.attach(io: beagle_photo_two, filename: 'beagle-two.jpg')
beagle.photos.attach(io: beagle_photo_three, filename: 'beagle-three.jpg')

rho = Dog.create(name: 'Rhodesian Ridgeback', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Golden Gate Park', large: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.769296, lng: -122.484739)

rho_photo_one = File.open("app/assets/images/photos/dogs/rho/rho-one.jpg")
rho_photo_two = File.open("app/assets/images/photos/dogs/rho/rho-two.jpg")
rho_photo_three = File.open("app/assets/images/photos/dogs/rho/rho-three.jpg")

rho.photos.attach(io: rho_photo_one, filename: 'rho-one.jpg')
rho.photos.attach(io: rho_photo_two, filename: 'rho-two.jpg')
rho.photos.attach(io: rho_photo_three, filename: 'rho-three.jpg')

aus = Dog.create(name: 'Australian Shepard', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Presidio', large: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.798940, lng: -122.466230)

aus_photo_one = File.open("app/assets/images/photos/dogs/aus/aus-one.jpg")
aus_photo_two = File.open("app/assets/images/photos/dogs/aus/aus-two.jpg")
aus_photo_three = File.open("app/assets/images/photos/dogs/aus/aus-three.jpg")

aus.photos.attach(io: aus_photo_one, filename: 'aus-one.jpg')
aus.photos.attach(io: aus_photo_two, filename: 'aus-two.jpg')
aus.photos.attach(io: aus_photo_three, filename: 'aus-three.jpg')

border = Dog.create(name: 'Border Collie', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Marin Headlands', large: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.826884, lng: -122.501923)

border_photo_one = File.open("app/assets/images/photos/dogs/border/border-one.jpg")
border_photo_two = File.open("app/assets/images/photos/dogs/border/border-two.jpg")
border_photo_three = File.open("app/assets/images/photos/dogs/border/border-three.jpg")

border.photos.attach(io: border_photo_one, filename: 'border-one.jpg')
border.photos.attach(io: border_photo_two, filename: 'border-two.jpg')
border.photos.attach(io: border_photo_three, filename: 'border-three.jpg')

king = Dog.create(name: 'King Cavalier', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Treasure Island', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.823640, lng: -122.370446)

king_photo_one = File.open("app/assets/images/photos/dogs/king/king-one.jpg")
king_photo_two = File.open("app/assets/images/photos/dogs/king/king-two.jpg")
king_photo_three = File.open("app/assets/images/photos/dogs/king/king-three.jpg")

king.photos.attach(io: king_photo_one, filename: 'king-one.jpg')
king.photos.attach(io: king_photo_two, filename: 'king-two.jpg')
king.photos.attach(io: king_photo_three, filename: 'king-three.jpg')

chi = Dog.create(name: 'Chihuahua', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Mission District', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.759632, lng: -122.414615)

chi_photo_one = File.open("app/assets/images/photos/dogs/chi/chi-one.jpg")
chi_photo_two = File.open("app/assets/images/photos/dogs/chi/chi-two.jpg")
chi_photo_three = File.open("app/assets/images/photos/dogs/chi/chi-three.jpg")

chi.photos.attach(io: chi_photo_one, filename: 'chi-one.jpg')
chi.photos.attach(io: chi_photo_two, filename: 'chi-two.jpg')
chi.photos.attach(io: chi_photo_three, filename: 'chi-three.jpg')

irish = Dog.create(name: 'Irish Terrier', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Dogpatch', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.759226, lng: -122.390160)

irish_photo_one = File.open("app/assets/images/photos/dogs/irish/irish-one.jpg")
irish_photo_two = File.open("app/assets/images/photos/dogs/irish/irish-two.jpg")
irish_photo_three = File.open("app/assets/images/photos/dogs/irish/irish-three.jpg")

irish.photos.attach(io: irish_photo_one, filename: 'irish-one.jpg')
irish.photos.attach(io: irish_photo_two, filename: 'irish-two.jpg')
irish.photos.attach(io: irish_photo_three, filename: 'irish-three.jpg')

russ = Dog.create(name: 'Irish Terrier', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: 'Esprit Park', small: true,
  zip_code: '94127', state: 'CA', city: 'San Francisco', lat: 37.761313, lng: -122.390879)

russ_photo_one = File.open("app/assets/images/photos/dogs/russ/russ-one.jpg")
russ_photo_two = File.open("app/assets/images/photos/dogs/russ/russ-two.jpg")
russ_photo_three = File.open("app/assets/images/photos/dogs/russ/russ-three.jpg")

russ.photos.attach(io: russ_photo_one, filename: 'russ-one.jpg')
russ.photos.attach(io: russ_photo_two, filename: 'russ-two.jpg')
russ.photos.attach(io: russ_photo_three, filename: 'russ-three.jpg')

Type.destroy_all

hound = Type.create(name: 'Hound')
herding = Type.create(name: 'Herding')
sporting = Type.create(name: 'Sporting')
toy = Type.create(name: 'Toy')
terrier = Type.create(name: 'Terrier')
working = Type.create(name: 'Working')

DogType.create(dog_id: yellow_lab.id, type_id: sporting.id)

DogType.create(dog_id: black_lab.id, type_id: sporting.id)

DogType.create(dog_id: husky.id, type_id: working.id)

DogType.create(dog_id: golden_retriever.id, type_id: sporting.id)

DogType.create(dog_id: bernese.id, type_id: working.id)

DogType.create(dog_id: newf.id, type_id: working.id)

DogType.create(dog_id: akita.id, type_id: working.id)

DogType.create(dog_id: cocker.id, type_id: sporting.id)

DogType.create(dog_id: beagle.id, type_id: hound.id)

DogType.create(dog_id: rho.id, type_id: hound.id)

DogType.create(dog_id: aus.id, type_id: herding.id)
DogType.create(dog_id: border.id, type_id: herding.id)

DogType.create(dog_id: king.id, type_id: toy.id)
DogType.create(dog_id: chi.id, type_id: toy.id)

DogType.create(dog_id: irish.id, type_id: terrier.id)

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


dumbledore_photo = File.open("app/assets/images/photos/users/dumbledore.jpg")
dumbledore.photo.attach(io: dumbledore_photo, filename: 'dumbledore.jpg')

harry_photo = File.open("app/assets/images/photos/users/harry.jpg")
harry.photo.attach(io: harry_photo, filename: 'harry.jpg')

hermione_photo = File.open("app/assets/images/photos/users/hermione.jpg")
hermione.photo.attach(io: hermione_photo, filename: 'hermione.jpg')

tyler_photo = File.open("app/assets/images/photos/users/tyler.jpg")
tyler.photo.attach(io: tyler_photo, filename: 'tyler.jpg')

ron_photo = File.open("app/assets/images/photos/users/ron.jpg")
ron.photo.attach(io: ron_photo, filename: 'ron.jpg')

draco_photo = File.open("app/assets/images/photos/users/draco.jpg")
draco.photo.attach(io: draco_photo, filename: 'draco.jpg')

hagrid_photo = File.open("app/assets/images/photos/users/hagrid.jpg")
hagrid.photo.attach(io: hagrid_photo, filename: 'hagrid.jpg')

snape_photo = File.open("app/assets/images/photos/users/snape.jpg")
snape.photo.attach(io: snape_photo, filename: 'snape.jpg')

sirius_photo = File.open("app/assets/images/photos/users/sirius.jpg")
sirius.photo.attach(io: sirius_photo, filename: 'sirius.jpg')

lord_photo = File.open("app/assets/images/photos/users/lord.jpg")
lord.photo.attach(io: lord_photo, filename: 'lord.jpg')

Review.destroy_all

i = 0

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

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 7
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 8
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 9
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 10
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 11
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 12
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 13
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 14
  )

  Review.create(
    body: fake_body,
    rating: Random.rand(3..5),
    user_id: i,
    dog_id: 15
  )

  i += 1
end
