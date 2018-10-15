require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dog.destroy_all

dog_one = Dog.create(name: 'Yellow Lab', sheds: true, good_with_kids: true,
  temperment: 'Friendly, Active, Outgoing', address_line_one: '2713 Folsom St.',
  zip_code: '94110', state: 'CA', city: 'San Francisco', lat: 37.754031, lng: -122.413923)

Type.destroy_all

type_one = Type.create(name: 'Sporting')
type_two = Type.create(name: 'Labrador Retriever')

DogType.create(dog_id: dog_one.id, type_id: type_one.id)
DogType.create(dog_id: dog_one.id, type_id: type_two.id)

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
