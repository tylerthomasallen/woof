json.types @types, :id, :name

json.dogs do
  json.array! @dogs do |dog|
    json.id dog.id
    json.name dog.name
    json.address_line_one dog.address_line_one
    json.address_line_two dog.address_line_two
    json.zip_code dog.zip_code
    json.state dog.state
    json.city dog.city
    json.lat dog.lat
    json.lng dog.lng
    json.temperment dog.temperment
    json.dogPhotos dog.photos do |photo|
      json.url url_for(photo)
    end
  end
end

# json.dogTypes @dogTypes, :id, :dog_id, :type_id
#
# json.reviews @reviews, :id, :body, :rating, :user_id, :dog_id




# json.array! @dogs do |dog|
#   json.id dog.id
#   json.name dog.name
#   json.dogPhotos dog.photos do |photo|
#     json.url url_for(photo)
#   end
#
#   json.types dog.types do |type|
#     json.type type
#   end
#
#   json.dogTypes dog.dog_types do |dogType|
#     json.dogType dogType
#   end
#
#   json.reviews dog.reviews do |review|
#     json.review review
#   end
#
#
#   json.dogPhotos dog.photos do |photo|
#     json.url url_for(photo)
#   end
#
# end
