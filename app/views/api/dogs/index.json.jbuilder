json.array! @dogs do |dog|
  json.id dog.id
  json.name dog.name
  json.dogPhotos dog.photos do |photo|
    json.url url_for(photo)
  end

  json.types dog.types do |type|
    json.type type
  end

  json.dogTypes dog.dog_types do |dogType|
    json.dogType dogType
  end

  json.reviews dog.reviews do |review|
    json.review review
  end
end
