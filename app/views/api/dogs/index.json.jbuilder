
json.types do
  json.array! @types, :id, :name
end

json.dogs do
  json.array! @dogs do |dog|
    json.id dog.id
    json.name dog.name
    json.dogPhotos dog.photos do |photo|
      json.url url_for(photo)
    end
end

json.dogTypes do
  json.array! @dog_types, :id, :dog_id, :type_id
end


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
