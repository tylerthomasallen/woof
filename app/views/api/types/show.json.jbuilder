json.types @type, :id, :name

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
    json.reviewCount dog.review_count
    json.rating dog.rating
    json.temperment dog.temperment
    json.dogPhotos dog.photos do |photo|
      json.url url_for(photo)
    end
  end
end

json.dogTypes @dogTypes, :id, :dog_id, :type_id
