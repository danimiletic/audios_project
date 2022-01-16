class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :image
      t.float :duration
      t.datetime :released
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
